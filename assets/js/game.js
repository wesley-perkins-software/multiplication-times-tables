export function initGameState(config, bestScores) {
  return {
    config,
    bestScores,
    currentQuestion: null,
    feedback: '',
  };
}
