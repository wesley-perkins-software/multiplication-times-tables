// LocalStorage helpers for best scores (no DOM usage).
const PREFIX = 'mtimes:v1';

// Normalize mode keys to a safe storage suffix.
function normalizeModeKey(modeKey) {
  if (typeof modeKey !== 'string' || !modeKey.trim()) {
    return 'mixed';
  }
  return modeKey.trim();
}

// Convert any value to a safe non-NaN number.
function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

// Build a namespaced localStorage key.
function getKey(suffix) {
  return `${PREFIX}:${suffix}`;
}

// Read the best streak for a given mode.
export function getBestStreak(modeKey) {
  const key = getKey(`bestStreak:${normalizeModeKey(modeKey)}`);
  return toNumber(localStorage.getItem(key));
}

// Persist the best streak for a given mode.
export function setBestStreak(modeKey, value) {
  const key = getKey(`bestStreak:${normalizeModeKey(modeKey)}`);
  const normalized = Math.max(0, Math.trunc(toNumber(value)));
  localStorage.setItem(key, String(normalized));
  return normalized;
}

// Remove all mtimes:v1 keys from localStorage.
export function resetAllStats() {
  const keysToRemove = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (key && key.startsWith(PREFIX)) {
      keysToRemove.push(key);
    }
  }
  keysToRemove.forEach((key) => localStorage.removeItem(key));
}

// Backwards-compatible helper for the current app bootstrap.
export function readBestScores(config) {
  const modeKey =
    config?.mode === 'table' && Number.isFinite(config?.tableNumber)
      ? `table-${config.tableNumber}`
      : 'mixed';
  return {
    bestStreak: getBestStreak(modeKey),
  };
}
