/**
 * Intentionally broken for RuleCloud PR demo — do not merge.
 */

import { listUserIds } from "../data/users";

// Uses obvious demo value; not a real secret (RuleCloud rule target).
const API_KEY = "demo_hardcoded_secret_123";

export function checkoutDraft(): string {
  // TODO: replace with real billing integration
  const users = listUserIds();
  return `checkout:${users.length}:${API_KEY.slice(0, 4)}***`;
}