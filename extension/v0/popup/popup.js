/**
 * Browser Echo — Popup Logic
 * Quick access to settings and side panel.
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Check auth status
  const response = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATUS' });
  const dot = document.getElementById('status-dot');
  const text = document.getElementById('status-text');

  if (response.authenticated) {
    dot.classList.add('connected');
    text.textContent = 'Connected to GitHub';
  } else {
    dot.classList.add('disconnected');
    text.textContent = 'Not connected';
  }

  // Load settings
  const settings = await chrome.storage.local.get([
    'checkpoint_minutes',
    'auto_open_panel'
  ]);

  document.getElementById('checkpoint-mins').value = settings.checkpoint_minutes || 10;
  document.getElementById('auto-open').checked = settings.auto_open_panel !== false;

  // Open side panel button
  document.getElementById('open-panel-btn').addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab) {
      chrome.sidePanel.open({ tabId: tab.id });
    }
    window.close();
  });

  // Save settings on change
  document.getElementById('checkpoint-mins').addEventListener('change', async (e) => {
    const minutes = parseInt(e.target.value) || 10;
    await chrome.storage.local.set({ checkpoint_minutes: minutes });
  });

  document.getElementById('auto-open').addEventListener('change', async (e) => {
    await chrome.storage.local.set({ auto_open_panel: e.target.checked });
  });
});
