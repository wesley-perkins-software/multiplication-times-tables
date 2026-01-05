export function readBestScores(config) {
  const suffix = config.mode === 'mixed' ? 'mixed' : `table-${config.tableNumber}`;
  return {
    bestStreak: getNumber(`mtimes:v1:bestStreak:${suffix}`),
    bestTimed: getNumber(`mtimes:v1:bestTimed:${suffix}`),
  };
}

function getNumber(key) {
  const value = localStorage.getItem(key);
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}
