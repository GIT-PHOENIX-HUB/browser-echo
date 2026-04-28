/**
 * Browser Echo — Background Service Worker
 * Handles: GitHub auth, checkpoint timer, tab close listener, side panel control
 */

importScripts('lib/github.js');

const DEFAULT_GAUNTLET_BASE_URL = 'http://localhost:3000';
const DEFAULT_GAUNTLET_TOKEN = 'phoenix-gauntlet-v1';
const GAUNTLET_CACHE_KEY = 'last_known_gauntlet_state';
const transcriptState = new Map();
let latestClaudeTabId = null;

// ═══════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════

chrome.runtime.onInstalled.addListener(async () => {
  await initializeExtension();
  console.log('[Browser Echo] Extension installed. Auth:', github.isAuthenticated);
});

chrome.runtime.onStartup.addListener(async () => {
  await initializeExtension();
});

// ═══════════════════════════════════════════════════
// SIDE PANEL — Auto-open on claude.ai
// ═══════════════════════════════════════════════════

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status !== 'complete') return;
  if (!tab.url) return;

  const settings = await chrome.storage.local.get(['auto_open_panel']);
  if (settings.auto_open_panel === false) return;

  if (tab.url.startsWith('https://claude.ai/')) {
    trackClaudeTab(tabId);
    enableSidePanel(tabId);
  }
});

// ═══════════════════════════════════════════════════
// CHECKPOINT TIMER
// ═══════════════════════════════════════════════════

const CHECKPOINT_ALARM = 'checkpoint-reminder';

async function startCheckpointTimer() {
  const settings = await chrome.storage.local.get(['checkpoint_minutes']);
  const minutes = settings.checkpoint_minutes || 10;

  chrome.alarms.create(CHECKPOINT_ALARM, {
    delayInMinutes: minutes,
    periodInMinutes: minutes
  });
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== CHECKPOINT_ALARM) return;

  // Set badge to remind user
  chrome.action.setBadgeText({ text: '!' });
  chrome.action.setBadgeBackgroundColor({ color: '#FF6B00' });

  console.log('[Browser Echo] Checkpoint reminder fired');
});

// Clear badge when user interacts with extension
chrome.sidePanel.setPanelBehavior?.({ openPanelOnActionClick: true });

// ═══════════════════════════════════════════════════
// TAB CLOSE — Handoff prompt
// ═══════════════════════════════════════════════════

chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
  // Check if the closed tab was a claude.ai tab
  // Note: we can't get the URL after tab is removed, so we track it
  const tracked = await chrome.storage.session.get([`tab_${tabId}`]);

  if (tracked[`tab_${tabId}`] === 'claude') {
    console.log('[Browser Echo] Claude.ai tab closed. Session may need handoff.');

    // Check if handoff was saved recently
    const lastHandoff = await chrome.storage.session.get(['last_handoff_time']);
    const now = Date.now();
    const fiveMinutes = 5 * 60 * 1000;

    if (!lastHandoff.last_handoff_time || (now - lastHandoff.last_handoff_time) > fiveMinutes) {
      // No recent handoff — log a warning
      console.warn('[Browser Echo] Tab closed without recent handoff save.');
    }
  }

  transcriptState.delete(tabId);
  if (latestClaudeTabId === tabId) {
    latestClaudeTabId = null;
  }
});

// Track claude.ai tabs
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.url && tab.url.startsWith('https://claude.ai/')) {
    trackClaudeTab(tabId);
  }
});

// ═══════════════════════════════════════════════════
// MESSAGE HANDLER — Communication with side panel
// ═══════════════════════════════════════════════════

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message, sender).then(sendResponse);
  return true; // async response
});

async function handleMessage(message, sender) {
  await github.init();
  const senderTabId = sender?.tab?.id || null;

  switch (message.type) {
    case 'CLAUDE_TAB_ACTIVE':
      if (senderTabId || message.tabId) {
        const tabId = senderTabId || message.tabId;
        trackClaudeTab(tabId);
        enableSidePanel(tabId);
        return { success: true, tabId };
      }
      return { success: true, tabId: null };

    case 'OPEN_SIDE_PANEL_REQUEST':
      if (senderTabId || message.tabId) {
        enableSidePanel(senderTabId || message.tabId);
      }
      return { success: true };

    case 'TRANSCRIPT_SNAPSHOT':
      if ((senderTabId || message.tabId) && message.snapshot) {
        const tabId = senderTabId || message.tabId;
        trackClaudeTab(tabId);
        transcriptState.set(tabId, {
          ...message.snapshot,
          tabId
        });
        broadcast({
          type: 'TRANSCRIPT_UPDATED',
          data: transcriptState.get(tabId)
        });
      }
      return { success: true };

    case 'GET_TRANSCRIPT_STATE': {
      const tabId = message.tabId || latestClaudeTabId;
      return {
        success: true,
        transcript: tabId ? transcriptState.get(tabId) || null : null
      };
    }

    case 'GET_GAUNTLET_STATE':
      try {
        const state = await getGauntletBridgeState();
        return { success: true, state };
      } catch (err) {
        return { success: false, error: err.message };
      }

    case 'GET_AUTH_STATUS':
      return { authenticated: github.isAuthenticated };

    case 'SET_TOKEN':
      await github.setToken(message.token);
      await startCheckpointTimer();
      return { success: true };

    case 'SIGN_OUT':
      await github.clearToken();
      chrome.alarms.clear(CHECKPOINT_ALARM);
      return { success: true };

    case 'READ_BOOTSTRAP':
      try {
        const files = await github.readBootstrapFiles();
        return { success: true, files };
      } catch (err) {
        return { success: false, error: err.message };
      }

    case 'READ_FILE':
      try {
        const file = await github.readFile(message.path);
        return { success: true, file };
      } catch (err) {
        return { success: false, error: err.message };
      }

    case 'SAVE_CHECKPOINT':
      try {
        const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 16);
        const entry = `${timestamp} MDT | CHECKPOINT | ${message.summary} | Browser Echo Extension`;
        await github.appendToFile('ledger/SESSION_LOG.md', entry, `checkpoint: ${message.summary}`);

        // Clear badge
        chrome.action.setBadgeText({ text: '' });

        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }

    case 'SAVE_HANDOFF':
      try {
        await github.writeFile(
          'buffers/BROWSER_BUFFER.md',
          message.content,
          'session handoff',
          message.sha
        );

        await chrome.storage.session.set({ last_handoff_time: Date.now() });
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }

    case 'SAVE_MISSIONS':
      try {
        await github.writeFile(
          'bootstrap/ACTIVE_MISSIONS.md',
          message.content,
          'update active missions',
          message.sha
        );
        return { success: true };
      } catch (err) {
        return { success: false, error: err.message };
      }

    default:
      return { error: `Unknown message type: ${message.type}` };
  }
}

async function initializeExtension() {
  await github.init();
  if (github.isAuthenticated) {
    await startCheckpointTimer();
  }
}

function enableSidePanel(tabId) {
  chrome.sidePanel.setOptions({
    tabId,
    path: 'sidepanel/panel.html',
    enabled: true
  });

  try {
    chrome.sidePanel.open?.({ tabId }, () => void chrome.runtime.lastError);
  } catch {
    // Some Chrome builds restrict programmatic open; setOptions still enables the panel.
  }
}

function trackClaudeTab(tabId) {
  latestClaudeTabId = tabId;
  chrome.storage.session.set({
    [`tab_${tabId}`]: 'claude',
    latest_claude_tab_id: tabId
  });
}

function broadcast(message) {
  try {
    chrome.runtime.sendMessage(message, () => void chrome.runtime.lastError);
  } catch {
    // No open listeners is fine.
  }
}

function normalizeBaseUrl(baseUrl) {
  return (baseUrl || DEFAULT_GAUNTLET_BASE_URL).replace(/\/+$/, '');
}

async function getGauntletConfig() {
  const settings = await chrome.storage.local.get(['gauntlet_base_url', 'gauntlet_token']);
  return {
    baseUrl: normalizeBaseUrl(settings.gauntlet_base_url),
    token: settings.gauntlet_token || DEFAULT_GAUNTLET_TOKEN
  };
}

async function fetchGauntletJson(path) {
  const { baseUrl, token } = await getGauntletConfig();
  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error(`Gauntlet API error: ${response.status}`);
  }

  return response.json();
}

function extractRepoTarget(bridgeLatest) {
  if (!bridgeLatest?.fields) return null;

  return (
    bridgeLatest.fields.repo ||
    bridgeLatest.fields['repos/files'] ||
    bridgeLatest.fields['filesystem target'] ||
    bridgeLatest.fields.path ||
    null
  );
}

async function getGauntletBridgeState() {
  const { baseUrl } = await getGauntletConfig();

  try {
    const [swarmState, bridgeTail] = await Promise.all([
      fetchGauntletJson('/api/swarm/state'),
      fetchGauntletJson('/api/ledgers/bridge/tail?lines=40').catch(() => null)
    ]);

    const liveState = {
      availability: 'live',
      stale: false,
      warning: null,
      checkedAt: new Date().toISOString(),
      source: 'gauntlet-live',
      sourceLabel: 'Gauntlet live',
      baseUrl,
      updatedAt: swarmState.updatedAt,
      currentMission:
        swarmState.bridgeLatest?.fields?.scope ||
        swarmState.bridgeLatest?.mission ||
        swarmState.lanes?.[0]?.mission ||
        'Waiting for first detailed handoff',
      latestBridge: swarmState.bridgeLatest,
      blockers: swarmState.blockers || [],
      nextOwner: swarmState.nextOwner || null,
      repoTarget: extractRepoTarget(swarmState.bridgeLatest),
      bridgeTail: bridgeTail?.lines || []
    };

    await chrome.storage.session.set({
      [GAUNTLET_CACHE_KEY]: liveState
    });

    return liveState;
  } catch (err) {
    const cached = await chrome.storage.session.get([GAUNTLET_CACHE_KEY]);
    const cachedState = cached[GAUNTLET_CACHE_KEY];

    if (cachedState) {
      return {
        ...cachedState,
        availability: 'stale',
        stale: true,
        checkedAt: new Date().toISOString(),
        warning: `Gauntlet is unreachable. Showing last-known-good bridge state. (${err.message})`
      };
    }

    return {
      availability: 'unavailable',
      stale: true,
      warning: `Gauntlet is unreachable and no live bridge state has been cached yet. (${err.message})`,
      checkedAt: new Date().toISOString(),
      source: 'gauntlet-unavailable',
      sourceLabel: 'Bridge unavailable',
      baseUrl,
      updatedAt: null,
      currentMission: null,
      latestBridge: null,
      blockers: [],
      nextOwner: null,
      repoTarget: null,
      bridgeTail: []
    };
  }
}
