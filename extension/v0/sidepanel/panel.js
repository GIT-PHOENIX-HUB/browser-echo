/**
 * Browser Echo — Side Panel Logic
 * Handles tab switching, GitHub reads/writes, transcript visibility,
 * bridge state, clipboard, and session timer.
 */

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════

const state = {
  sessionStart: Date.now(),
  bufferSha: null,
  missionsSha: null,
  files: {},
  transcript: null,
  bridge: null,
  transcriptPasteState: 'Not yet pasted into chat',
  refreshStarted: false,
  refreshTimers: []
};

// ═══════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async () => {
  setupTabs();
  setupButtons();
  setupRuntimeListeners();
  startSessionTimer();
  await checkAuth();
});

async function checkAuth() {
  const response = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATUS' });
  if (response.authenticated) {
    showMainScreen();
    await loadBootstrapFiles();
    await refreshLivePanels();
    startLiveRefresh();
  } else {
    showAuthScreen();
  }
}

// ═══════════════════════════════════════════════════
// SCREENS
// ═══════════════════════════════════════════════════

function showAuthScreen() {
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('main-screen').classList.add('hidden');
}

function showMainScreen() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
}

// ═══════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════

function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update tab buttons
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update tab content
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      document.getElementById(`tab-${btn.dataset.tab}`).classList.remove('hidden');
    });
  });
}

// ═══════════════════════════════════════════════════
// BUTTONS
// ═══════════════════════════════════════════════════

function setupButtons() {
  // Sign in
  document.getElementById('sign-in-btn').addEventListener('click', handleSignIn);

  // Sign out
  document.getElementById('sign-out-btn').addEventListener('click', handleSignOut);

  // Copy bootstrap
  document.getElementById('copy-bootstrap-btn').addEventListener('click', handleCopyBootstrap);

  // Transcript copy
  document.getElementById('copy-transcript-btn').addEventListener('click', handleCopyTranscript);
  document.getElementById('copy-excerpt-btn').addEventListener('click', handleCopyExcerpt);

  // Bridge copy
  document.getElementById('copy-mission-packet-btn').addEventListener('click', handleCopyMissionPacket);

  // Save checkpoint
  document.getElementById('save-checkpoint-btn').addEventListener('click', handleSaveCheckpoint);

  // Save handoff
  document.getElementById('save-handoff-btn').addEventListener('click', handleSaveHandoff);

  // Save & close
  document.getElementById('save-close-btn').addEventListener('click', handleSaveAndClose);
}

function setupRuntimeListeners() {
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'TRANSCRIPT_UPDATED') {
      updateTranscriptState(message.data);
    }
  });
}

// ═══════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════

async function handleSignIn() {
  // For v0, use a personal access token entered manually
  // Future: proper OAuth flow via chrome.identity
  const token = prompt(
    'Enter your GitHub Personal Access Token:\n\n' +
    'Create one at: github.com/settings/tokens\n' +
    'Required scope: repo'
  );

  if (!token) return;

  const response = await chrome.runtime.sendMessage({
    type: 'SET_TOKEN',
    token: token.trim()
  });

  if (response.success) {
    showMainScreen();
    await loadBootstrapFiles();
    await refreshLivePanels();
    startLiveRefresh();
  }
}

async function handleSignOut() {
  await chrome.runtime.sendMessage({ type: 'SIGN_OUT' });
  for (const timer of state.refreshTimers) {
    clearInterval(timer);
  }
  state.refreshTimers = [];
  state.refreshStarted = false;
  showAuthScreen();
}

// ═══════════════════════════════════════════════════
// LOAD FILES
// ═══════════════════════════════════════════════════

async function loadBootstrapFiles() {
  const response = await chrome.runtime.sendMessage({ type: 'READ_BOOTSTRAP' });

  if (!response.success) {
    console.error('[Browser Echo] Failed to load files:', response.error);
    document.getElementById('browser-md-content').textContent = `Error: ${response.error}`;
    return;
  }

  const { files } = response;

  // BROWSER.md
  if (files.browser) {
    document.getElementById('browser-md-content').textContent = files.browser.content;
    document.getElementById('browser-md-content').classList.remove('loading');
    state.files.browser = files.browser;
  }

  // BUFFER
  if (files.buffer) {
    document.getElementById('buffer-content').textContent = files.buffer.content;
    document.getElementById('buffer-content').classList.remove('loading');
    state.bufferSha = files.buffer.sha;
    state.files.buffer = files.buffer;

    // Pre-fill handoff textarea with current buffer
    document.getElementById('handoff-text').value = files.buffer.content;
  }

  // MISSIONS
  if (files.missions) {
    document.getElementById('missions-content').textContent = files.missions.content;
    document.getElementById('missions-content').classList.remove('loading');
    state.missionsSha = files.missions.sha;
    state.files.missions = files.missions;
  }

  // SESSION LOG (last 30 lines)
  const logFile = files.activeLog || files.log;
  if (logFile) {
    const lines = logFile.content.split('\n');
    const last30 = lines.slice(-30).join('\n');
    document.getElementById('log-content').textContent = last30;
    document.getElementById('log-content').classList.remove('loading');
    state.files.log = logFile;
  }

  if (files.activeLog) {
    state.files.activeLog = files.activeLog;
  }

  renderSavedContinuity();
}

async function refreshLivePanels() {
  await Promise.all([
    loadTranscriptState(),
    loadBridgeState()
  ]);
}

function startLiveRefresh() {
  if (state.refreshStarted) return;
  state.refreshStarted = true;
  state.refreshTimers.push(window.setInterval(loadTranscriptState, 2500));
  state.refreshTimers.push(window.setInterval(loadBridgeState, 15000));
}

async function loadTranscriptState() {
  const response = await chrome.runtime.sendMessage({ type: 'GET_TRANSCRIPT_STATE' });
  updateTranscriptState(response?.transcript || null);
}

function updateTranscriptState(transcript) {
  state.transcript = transcript;

  const visiblePill = document.getElementById('transcript-pill-visible');
  const savedPill = document.getElementById('transcript-pill-saved');
  const manualPill = document.getElementById('transcript-pill-manual');
  const meta = document.getElementById('transcript-meta');
  const content = document.getElementById('transcript-content');

  if (transcript?.visibleInTab && transcript.messageCount > 0) {
    visiblePill.textContent = `Visible in tab (${transcript.messageCount})`;
    visiblePill.className = 'pill pill-success';
    meta.textContent = [
      transcript.title || 'Untitled claude.ai conversation',
      transcript.url || 'No URL available',
      `Updated: ${formatTimestamp(transcript.updatedAt)}`
    ].join('\n');
    content.textContent = transcript.visibleText;
    content.classList.remove('loading');
  } else {
    visiblePill.textContent = 'No visible transcript';
    visiblePill.className = 'pill pill-neutral';
    meta.textContent = 'Keep the claude.ai conversation open. The side panel only shows what is visibly present in the active tab.';
    content.textContent = 'No visible claude.ai conversation transcript detected yet.';
    content.classList.remove('loading');
  }

  savedPill.textContent = state.files.buffer ? 'Saved continuity' : 'Continuity not loaded';
  savedPill.className = state.files.buffer ? 'pill pill-success' : 'pill pill-neutral';

  manualPill.textContent = state.transcriptPasteState;
}

async function loadBridgeState() {
  const response = await chrome.runtime.sendMessage({ type: 'GET_GAUNTLET_STATE' });
  state.bridge = normalizeBridgeState(response?.state || null);

  renderBridgeState();
}

function renderSavedContinuity() {
  const continuity = document.getElementById('continuity-content');
  if (!continuity) return;

  const mission = extractCurrentMission(state.files.missions?.content || '');
  const handoff = truncateText(state.files.buffer?.content || 'No saved handoff loaded yet.', 1600);
  continuity.textContent = [
    `Mission: ${mission || 'Unknown'}`,
    '',
    handoff
  ].join('\n');
  continuity.classList.remove('loading');
}

function renderBridgeState() {
  const bridge = state.bridge;
  const source = document.getElementById('bridge-source');
  const currentMission = document.getElementById('bridge-current-mission');
  const nextOwner = document.getElementById('bridge-next-owner');
  const repoTarget = document.getElementById('bridge-repo-target');
  const updatedAt = document.getElementById('bridge-updated-at');
  const latest = document.getElementById('bridge-latest');
  const blockers = document.getElementById('bridge-blockers');
  const warning = document.getElementById('bridge-warning');

  if (!bridge) {
    source.textContent = 'Waiting for bridge data…';
    warning.textContent = '';
    warning.classList.remove('error');
    warning.classList.add('hidden');
    return;
  }

  if (bridge.availability === 'stale') {
    warning.textContent = bridge.warning || `STALE: Showing last-known-good bridge state from ${formatTimestamp(bridge.updatedAt)}.`;
    warning.classList.remove('error');
    warning.classList.remove('hidden');
  } else if (bridge.availability === 'unavailable') {
    warning.textContent = bridge.warning || 'Bridge unavailable. No live Gauntlet state has been loaded in this side panel yet.';
    warning.classList.add('error');
    warning.classList.remove('hidden');
  } else {
    warning.textContent = '';
    warning.classList.remove('error');
    warning.classList.add('hidden');
  }

  source.textContent = [
    bridge.sourceLabel || 'Bridge unavailable',
    bridge.updatedAt ? `Last live update: ${formatTimestamp(bridge.updatedAt)}` : 'No live update yet',
    bridge.checkedAt ? `Last checked: ${formatTimestamp(bridge.checkedAt)}` : null
  ].filter(Boolean).join('\n');

  currentMission.textContent = bridge.currentMission || 'Bridge unavailable';
  nextOwner.textContent = bridge.nextOwner || 'Unassigned';
  repoTarget.textContent = bridge.repoTarget || 'Repo target not declared';
  updatedAt.textContent = bridge.updatedAt ? formatTimestamp(bridge.updatedAt) : 'Unavailable';

  latest.textContent = formatLatestBridge(bridge.latestBridge);
  latest.classList.remove('loading');

  blockers.classList.remove('loading');
  blockers.replaceChildren();

  if (!bridge.blockers || bridge.blockers.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'stack-item';
    const title = document.createElement('div');
    title.className = 'stack-item-title';
    title.textContent = 'No active blockers';
    const body = document.createElement('div');
    body.className = 'stack-item-body';
    body.textContent = 'Nothing in the current bridge state is marked BLOCK, WAITING, or STALE.';
    empty.append(title, body);
    blockers.appendChild(empty);
    return;
  }

  for (const blocker of bridge.blockers) {
    const item = document.createElement('div');
    item.className = 'stack-item';
    const title = document.createElement('div');
    title.className = 'stack-item-title';
    title.textContent = `${blocker.source} | ${blocker.status}`;
    const body = document.createElement('div');
    body.className = 'stack-item-body';
    body.textContent = [blocker.mission, blocker.detail, blocker.timestamp].filter(Boolean).join('\n');
    item.append(title, body);
    blockers.appendChild(item);
  }
}

// ═══════════════════════════════════════════════════
// ACTIONS
// ═══════════════════════════════════════════════════

async function handleCopyBootstrap() {
  const parts = [];

  if (state.files.browser) {
    parts.push('# BROWSER ECHO BOOTSTRAP\n\n' + state.files.browser.content);
  }
  if (state.files.buffer) {
    parts.push('\n\n---\n\n# LAST SESSION HANDOFF\n\n' + state.files.buffer.content);
  }
  if (state.files.missions) {
    parts.push('\n\n---\n\n# ACTIVE MISSIONS\n\n' + state.files.missions.content);
  }

  const text = parts.join('');

  try {
    await navigator.clipboard.writeText(text);
    const btn = document.getElementById('copy-bootstrap-btn');
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy Bootstrap to Clipboard'; }, 2000);
  } catch (err) {
    console.error('[Browser Echo] Clipboard write failed:', err);
  }
}

async function handleCopyTranscript() {
  if (!state.transcript?.visibleText) return;

  await navigator.clipboard.writeText(state.transcript.visibleText);
  state.transcriptPasteState = 'Copied for manual paste';
  updateTranscriptState(state.transcript);
}

async function handleCopyExcerpt() {
  if (!state.transcript?.excerpt) return;

  const payload = [
    '# Visible Claude Transcript Excerpt',
    '',
    state.transcript.excerpt
  ].join('\n');

  await navigator.clipboard.writeText(payload);
  state.transcriptPasteState = 'Copied excerpt for manual paste';
  updateTranscriptState(state.transcript);
}

async function handleCopyMissionPacket() {
  const bridge = state.bridge || normalizeBridgeState(null);
  const packet = [
    '# Current Mission Packet',
    '',
    `Source: ${bridge.sourceLabel || 'Bridge unavailable'}`,
    `Status: ${bridge.availability || 'unavailable'}`,
    `Current mission: ${bridge.currentMission || 'Bridge unavailable'}`,
    `Next owner: ${bridge.nextOwner || 'Unassigned'}`,
    `Repo target: ${bridge.repoTarget || 'Not declared'}`,
    bridge.warning ? `Warning: ${bridge.warning}` : '',
    '',
    '## Latest Bridge Entry',
    formatLatestBridge(bridge.latestBridge),
    '',
    '## Blockers',
    bridge.blockers?.length
      ? bridge.blockers.map((blocker) => `- ${blocker.source} | ${blocker.status} | ${blocker.mission || blocker.detail || 'No detail'}`).join('\n')
      : '- No active blockers'
  ].join('\n');

  await navigator.clipboard.writeText(packet);
}

async function handleSaveCheckpoint() {
  const text = document.getElementById('checkpoint-text').value.trim();
  const statusEl = document.getElementById('checkpoint-status');

  if (!text) {
    statusEl.textContent = 'Write something first.';
    statusEl.className = 'status warning';
    return;
  }

  statusEl.textContent = 'Saving...';
  statusEl.className = 'status';

  const response = await chrome.runtime.sendMessage({
    type: 'SAVE_CHECKPOINT',
    summary: text
  });

  if (response.success) {
    statusEl.textContent = 'Checkpoint saved.';
    statusEl.className = 'status success';
    document.getElementById('checkpoint-text').value = '';

    // Reload log
    const logResponse = await chrome.runtime.sendMessage({
      type: 'READ_FILE',
      path: 'ledger/SESSION_LOG.md'
    });
    if (logResponse.success && logResponse.file) {
      const lines = logResponse.file.content.split('\n');
      document.getElementById('log-content').textContent = lines.slice(-30).join('\n');
    }
  } else {
    statusEl.textContent = `Error: ${response.error}`;
    statusEl.className = 'status error';
  }
}

async function handleSaveHandoff() {
  const text = document.getElementById('handoff-text').value.trim();
  const statusEl = document.getElementById('handoff-status');

  if (!text) {
    statusEl.textContent = 'Write something first.';
    statusEl.className = 'status warning';
    return;
  }

  statusEl.textContent = 'Saving...';
  statusEl.className = 'status';

  // Re-read to get current SHA (prevent conflicts)
  const current = await chrome.runtime.sendMessage({
    type: 'READ_FILE',
    path: 'buffers/BROWSER_BUFFER.md'
  });

  const response = await chrome.runtime.sendMessage({
    type: 'SAVE_HANDOFF',
    content: text,
    sha: current.file ? current.file.sha : null
  });

  if (response.success) {
    statusEl.textContent = 'Handoff saved.';
    statusEl.className = 'status success';
  } else {
    statusEl.textContent = `Error: ${response.error}`;
    statusEl.className = 'status error';
  }
}

async function handleSaveAndClose() {
  await handleSaveHandoff();

  // Also save a ledger entry
  const text = document.getElementById('handoff-text').value.trim();
  if (text) {
    const summary = text.split('\n')[0].replace(/^#+\s*/, '').slice(0, 100);
    await chrome.runtime.sendMessage({
      type: 'SAVE_CHECKPOINT',
      summary: `Session handoff saved: ${summary}`
    });
  }
}

// ═══════════════════════════════════════════════════
// SESSION TIMER
// ═══════════════════════════════════════════════════

function startSessionTimer() {
  const timerEl = document.getElementById('session-timer');

  function update() {
    const elapsed = Date.now() - state.sessionStart;
    const minutes = Math.floor(elapsed / 60000);
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    timerEl.textContent = hours > 0
      ? `Session: ${hours}h ${mins}m`
      : `Session: ${mins}m`;
  }

  update();
  setInterval(update, 60000);
}

function extractCurrentMission(content) {
  const sections = content.split(/^##\s+/m).slice(1);
  for (const section of sections) {
    if (!/\*\*Status:\*\*\s+ACTIVE(?:\s+\(CURRENT\))?/i.test(section)) continue;
    const [heading] = section.split(/\r?\n/);
    return heading.replace(/^Mission\s+\d+:\s*/, '').trim();
  }
  return '';
}

function buildUnavailableBridgeState() {
  return {
    availability: 'unavailable',
    stale: true,
    sourceLabel: 'Bridge unavailable',
    updatedAt: null,
    checkedAt: new Date().toISOString(),
    currentMission: 'Bridge unavailable',
    nextOwner: 'Unavailable',
    repoTarget: 'Unavailable',
    latestBridge: null,
    blockers: [],
    warning: 'Gauntlet bridge state is unavailable and no live bridge data has been loaded in this panel yet.'
  };
}

function normalizeBridgeState(bridge) {
  if (!bridge) return buildUnavailableBridgeState();

  return {
    availability: bridge.availability || 'live',
    stale: Boolean(bridge.stale),
    sourceLabel: bridge.sourceLabel || 'Gauntlet live',
    updatedAt: bridge.updatedAt || null,
    checkedAt: bridge.checkedAt || null,
    currentMission: bridge.currentMission || null,
    nextOwner: bridge.nextOwner || null,
    repoTarget: bridge.repoTarget || null,
    latestBridge: bridge.latestBridge || null,
    blockers: bridge.blockers || [],
    warning: bridge.warning || null
  };
}

function formatLatestBridge(entry) {
  if (!entry) return 'No bridge entry available.';

  const fields = entry.fields || {};
  return [
    `${entry.source || 'Unknown'} | ${entry.type || 'ENTRY'}`,
    entry.mission || fields.scope || '',
    fields.actions || fields.evidence || fields.scope || '',
    fields.next_owner ? `Next owner: ${fields.next_owner}` : ''
  ].filter(Boolean).join('\n\n');
}

function formatTimestamp(value) {
  if (!value) return 'Unknown';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}

function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}\n\n…`;
}
