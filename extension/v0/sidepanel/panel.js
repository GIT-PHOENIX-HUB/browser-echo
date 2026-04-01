/**
 * Browser Echo — Side Panel Logic
 * Handles tab switching, GitHub reads/writes, clipboard, session timer
 */

// ═══════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════

const state = {
  sessionStart: Date.now(),
  bufferSha: null,
  missionsSha: null,
  files: {}
};

// ═══════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async () => {
  await checkAuth();
  setupTabs();
  setupButtons();
  startSessionTimer();
});

async function checkAuth() {
  const response = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATUS' });
  if (response.authenticated) {
    showMainScreen();
    await loadBootstrapFiles();
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

  // Save checkpoint
  document.getElementById('save-checkpoint-btn').addEventListener('click', handleSaveCheckpoint);

  // Save handoff
  document.getElementById('save-handoff-btn').addEventListener('click', handleSaveHandoff);

  // Save & close
  document.getElementById('save-close-btn').addEventListener('click', handleSaveAndClose);
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
  }
}

async function handleSignOut() {
  await chrome.runtime.sendMessage({ type: 'SIGN_OUT' });
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
  if (files.log) {
    const lines = files.log.content.split('\n');
    const last30 = lines.slice(-30).join('\n');
    document.getElementById('log-content').textContent = last30;
    document.getElementById('log-content').classList.remove('loading');
    state.files.log = files.log;
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
