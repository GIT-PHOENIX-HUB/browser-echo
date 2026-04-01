/**
 * Browser Echo — Background Service Worker
 * Handles: GitHub auth, checkpoint timer, tab close listener, side panel control
 */

importScripts('lib/github.js');

// ═══════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════

chrome.runtime.onInstalled.addListener(async () => {
  await github.init();
  console.log('[Browser Echo] Extension installed. Auth:', github.isAuthenticated);
});

chrome.runtime.onStartup.addListener(async () => {
  await github.init();
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
    chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel/panel.html',
      enabled: true
    });
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
});

// Track claude.ai tabs
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.url && tab.url.startsWith('https://claude.ai/')) {
    await chrome.storage.session.set({ [`tab_${tabId}`]: 'claude' });
  }
});

// ═══════════════════════════════════════════════════
// MESSAGE HANDLER — Communication with side panel
// ═══════════════════════════════════════════════════

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message).then(sendResponse);
  return true; // async response
});

async function handleMessage(message) {
  await github.init();

  switch (message.type) {
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
