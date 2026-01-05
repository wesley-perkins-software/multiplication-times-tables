// Core game logic: question generation and answer validation (no DOM usage).
const MIN_OPERAND = 1;
const MAX_OPERAND = 12;

// Ensure the operand stays within the supported 1–12 range.
function clampOperand(value) {
  if (!Number.isFinite(value)) {
    return MIN_OPERAND;
  }
  return Math.min(Math.max(Math.trunc(value), MIN_OPERAND), MAX_OPERAND);
}

// Generate a random operand between 1 and 12 inclusive.
function randomOperand() {
  return Math.floor(Math.random() * (MAX_OPERAND - MIN_OPERAND + 1)) + MIN_OPERAND;
}

// Build a multiplication question based on config (mixed or fixed table).
function buildQuestion(config) {
  const mode = config?.mode === 'table' ? 'table' : 'mixed';
  if (mode === 'table') {
    const table = clampOperand(Number(config?.tableNumber));
    const other = randomOperand();
    return {
      a: table,
      b: other,
      product: table * other,
    };
  }
  const a = randomOperand();
  const b = randomOperand();
  return {
    a,
    b,
    product: a * b,
  };
}

// Initialize a fresh in-memory session state.
export function initGameState(config = {}) {
  return {
    config: {
      mode: config.mode === 'table' ? 'table' : 'mixed',
      tableNumber: config.mode === 'table' ? clampOperand(Number(config.tableNumber)) : null,
    },
    currentQuestion: null,
    currentStreak: 0,
    totalAnswered: 0,
    totalCorrect: 0,
  };
}

// Generate and store the next question for the given state.
export function getNextQuestion(state) {
  if (!state || typeof state !== 'object') {
    return null;
  }
  const question = buildQuestion(state.config);
  state.currentQuestion = question;
  return question;
}

// Validate an answer and update streak/metrics.
export function checkAnswer(state, userInput) {
  if (!state || typeof state !== 'object') {
    return { correct: false, correctAnswer: null };
  }
  const question = state.currentQuestion;
  if (!question) {
    return { correct: false, correctAnswer: null };
  }
  const normalized = Number(userInput);
  if (!Number.isFinite(normalized)) {
    return { correct: false, correctAnswer: question.product };
  }

  state.totalAnswered += 1;

  if (normalized === question.product) {
    state.currentStreak += 1;
    state.totalCorrect += 1;
    return { correct: true };
  }

  state.currentStreak = 0;
  return { correct: false, correctAnswer: question.product };
}

// Reset session-only stats without changing configuration.
export function resetSession(state) {
  if (!state || typeof state !== 'object') {
    return;
  }
  state.currentQuestion = null;
  state.currentStreak = 0;
  state.totalAnswered = 0;
  state.totalCorrect = 0;
}
