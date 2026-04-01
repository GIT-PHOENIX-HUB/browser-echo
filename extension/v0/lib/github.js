/**
 * GitHub API wrapper for Browser Echo extension.
 * Reads/writes files in the browser-echo repo.
 */

const DEFAULT_REPO = 'GIT-PHOENIX-HUB/browser-echo';
const API_BASE = 'https://api.github.com';

class GitHubClient {
  constructor() {
    this.token = null;
    this.repo = DEFAULT_REPO;
  }

  async init() {
    const result = await chrome.storage.local.get(['github_token', 'github_repo']);
    this.token = result.github_token || null;
    this.repo = result.github_repo || DEFAULT_REPO;
  }

  get isAuthenticated() {
    return this.token !== null;
  }

  async setToken(token) {
    this.token = token;
    await chrome.storage.local.set({ github_token: token });
  }

  async clearToken() {
    this.token = null;
    await chrome.storage.local.remove('github_token');
  }

  /**
   * Read a file from the browser-echo repo.
   * Returns { content, sha } where content is decoded text.
   */
  async readFile(path) {
    if (!this.token) throw new Error('Not authenticated');

    const response = await fetch(
      `${API_BASE}/repos/${this.repo}/contents/${path}`,
      {
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const content = atob(data.content.replace(/\n/g, ''));
    return { content, sha: data.sha };
  }

  /**
   * Write (create or update) a file in the browser-echo repo.
   * Requires sha for updates (prevents overwrite conflicts).
   */
  async writeFile(path, content, message, sha = null) {
    if (!this.token) throw new Error('Not authenticated');

    const body = {
      message: `[browser-echo] ${message}`,
      content: btoa(unescape(encodeURIComponent(content))),
      committer: {
        name: 'Browser Echo Extension',
        email: 'browser@phoenixelectric.life'
      }
    };

    if (sha) body.sha = sha;

    const response = await fetch(
      `${API_BASE}/repos/${this.repo}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`GitHub write error: ${response.status} — ${error.message}`);
    }

    return await response.json();
  }

  /**
   * Append content to an existing file (read + append + write).
   * Used for SESSION_LOG.md entries.
   */
  async appendToFile(path, newContent, message) {
    const existing = await this.readFile(path);
    if (!existing) throw new Error(`File not found: ${path}`);

    const updated = existing.content + '\n' + newContent;
    return await this.writeFile(path, updated, message, existing.sha);
  }

  /**
   * Read the key Browser Echo files for bootstrap.
   * Returns all files needed for side panel display.
   */
  async readBootstrapFiles() {
    const [browser, buffer, missions, log] = await Promise.all([
      this.readFile('BROWSER.md'),
      this.readFile('buffers/BROWSER_BUFFER.md'),
      this.readFile('bootstrap/ACTIVE_MISSIONS.md'),
      this.readFile('ledger/SESSION_LOG.md')
    ]);

    return { browser, buffer, missions, log };
  }
}

// Singleton
const github = new GitHubClient();
