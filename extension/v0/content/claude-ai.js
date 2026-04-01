/**
 * Browser Echo — Content Script for claude.ai
 * Minimal: adds BBB indicator, detects page state.
 * Does NOT inject text into conversations.
 */

// Add BBB indicator
const indicator = document.createElement('div');
indicator.id = 'bbb-indicator';
indicator.textContent = 'BBB';
indicator.title = 'Browser Echo active — Side panel available';
document.body.appendChild(indicator);

// Notify background that this is a claude.ai tab
chrome.runtime.sendMessage({ type: 'CLAUDE_TAB_ACTIVE' });

console.log('[Browser Echo] Content script loaded on claude.ai');
