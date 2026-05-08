const PREFIX = 'mtimes:v1';

function normalizeModeKey(modeKey: string): string {
  if (typeof modeKey !== 'string' || !modeKey.trim()) {
    return 'mixed';
  }
  return modeKey.trim();
}

function toNumber(value: unknown): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getKey(suffix: string): string {
  return `${PREFIX}:${suffix}`;
}

export function getBestStreak(modeKey: string): number {
  const key = getKey(`bestStreak:${normalizeModeKey(modeKey)}`);
  try {
    return toNumber(localStorage.getItem(key));
  } catch {
    return 0;
  }
}

export function setBestStreak(modeKey: string, value: number): number {
  const key = getKey(`bestStreak:${normalizeModeKey(modeKey)}`);
  const normalized = Math.max(0, Math.trunc(toNumber(value)));
  try {
    localStorage.setItem(key, String(normalized));
    return normalized;
  } catch {
    return 0;
  }
}

export function resetBestStreak(modeKey: string): number {
  return setBestStreak(modeKey, 0);
}

export function resetAllStats(): void {
  try {
    const keysToRemove: string[] = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key && key.startsWith(PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  } catch {
    return;
  }
}

export function getModeKey(mode: 'mixed' | 'table', tableNumber: number | null): string {
  if (mode === 'table' && tableNumber !== null && Number.isFinite(tableNumber)) {
    return `table-${tableNumber}`;
  }
  return 'mixed';
}
