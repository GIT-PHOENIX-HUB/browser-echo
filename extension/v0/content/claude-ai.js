/**
 * Browser Echo — Content Script for claude.ai
 * Adds BBB indicator and exports the visible conversation transcript.
 * Does NOT inject text into conversations.
 */

const indicator = document.createElement('div');
const SELECTOR_GROUPS = [
  'main [data-message-author-role]',
  'main [data-testid*="message"]',
  'main article',
  'main [role="article"]'
];

let activeTabId = null;
let lastSignature = '';
let latestSnapshot = null;
let publishTimer = null;

indicator.id = 'bbb-indicator';
indicator.textContent = 'BBB';
indicator.title = 'Browser Echo active — Side panel available';
indicator.addEventListener('click', () => {
  chrome.runtime.sendMessage({
    type: 'OPEN_SIDE_PANEL_REQUEST',
    tabId: activeTabId
  });
});
document.body.appendChild(indicator);

chrome.runtime.sendMessage({ type: 'CLAUDE_TAB_ACTIVE' }, (response) => {
  activeTabId = response?.tabId || null;
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_TRANSCRIPT_SNAPSHOT') {
    sendResponse({ success: true, snapshot: latestSnapshot });
    return true;
  }
  return false;
});

function normalizeText(text) {
  return text
    .replace(/\u00a0/g, ' ')
    .replace(/\r/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function isVisible(element) {
  if (!element) return false;
  const style = window.getComputedStyle(element);
  if (style.display === 'none' || style.visibility === 'hidden') return false;
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function getBestCandidateElements() {
  for (const selector of SELECTOR_GROUPS) {
    const nodes = Array.from(document.querySelectorAll(selector))
      .filter(isVisible)
      .filter((element) => normalizeText(element.innerText || element.textContent || '').length > 0);

    if (nodes.length > 0) {
      return dedupeNestedElements(nodes);
    }
  }

  return [];
}

function dedupeNestedElements(elements) {
  return elements.filter((element) => {
    const text = normalizeText(element.innerText || element.textContent || '');
    if (!text) return false;

    return !elements.some((other) => {
      if (other === element) return false;
      if (!other.contains(element)) return false;
      const otherText = normalizeText(other.innerText || other.textContent || '');
      return otherText === text;
    });
  });
}

function detectRole(element) {
  const attrRole = element.getAttribute('data-message-author-role');
  if (attrRole) return attrRole.toLowerCase();

  const haystack = [
    element.getAttribute('data-testid') || '',
    element.className || '',
    element.getAttribute('aria-label') || ''
  ].join(' ').toLowerCase();

  if (haystack.includes('assistant') || haystack.includes('claude')) return 'assistant';
  if (haystack.includes('user') || haystack.includes('human')) return 'user';
  return 'turn';
}

function buildSnapshot() {
  const messages = getBestCandidateElements()
    .map((element, index) => {
      const text = normalizeText(element.innerText || element.textContent || '');
      if (!text) return null;

      return {
        role: detectRole(element),
        label:
          detectRole(element) === 'assistant' ? 'Claude'
          : detectRole(element) === 'user' ? 'User'
          : `Turn ${index + 1}`,
        text
      };
    })
    .filter(Boolean);

  const visibleText = messages
    .map((message) => `${message.label}\n${message.text}`)
    .join('\n\n');

  return {
    title: document.title,
    url: window.location.href,
    updatedAt: new Date().toISOString(),
    visibleInTab: messages.length > 0,
    messageCount: messages.length,
    messages,
    visibleText,
    excerpt: messages.slice(-4).map((message) => `${message.label}\n${message.text}`).join('\n\n')
  };
}

function schedulePublish() {
  if (publishTimer) {
    clearTimeout(publishTimer);
  }

  publishTimer = setTimeout(publishSnapshot, 300);
}

function publishSnapshot() {
  const snapshot = buildSnapshot();
  latestSnapshot = snapshot;

  const signature = snapshot.messages
    .map((message) => `${message.label}:${message.text.slice(0, 120)}`)
    .join('\n--\n');

  if (signature === lastSignature) return;
  lastSignature = signature;

  chrome.runtime.sendMessage({
    type: 'TRANSCRIPT_SNAPSHOT',
    tabId: activeTabId,
    snapshot
  });
}

const observer = new MutationObserver(() => {
  schedulePublish();
});

observer.observe(document.body, {
  subtree: true,
  childList: true,
  characterData: true
});

schedulePublish();
console.log('[Browser Echo] Content script loaded on claude.ai');
