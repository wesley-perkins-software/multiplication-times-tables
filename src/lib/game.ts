const MIN_OPERAND = 1;
const MAX_OPERAND = 12;

export interface GameConfig {
  mode: 'mixed' | 'table';
  tableNumber?: number | null;
}

export interface Question {
  a: number;
  b: number;
  product: number;
}

export interface GameState {
  config: {
    mode: 'mixed' | 'table';
    tableNumber: number | null;
  };
  currentQuestion: Question | null;
  currentStreak: number;
  totalAnswered: number;
  totalCorrect: number;
}

export interface CheckResult {
  correct: boolean;
  correctAnswer?: number;
}

function clampOperand(value: number): number {
  if (!Number.isFinite(value)) {
    return MIN_OPERAND;
  }
  return Math.min(Math.max(Math.trunc(value), MIN_OPERAND), MAX_OPERAND);
}

function randomOperand(): number {
  return Math.floor(Math.random() * (MAX_OPERAND - MIN_OPERAND + 1)) + MIN_OPERAND;
}

function buildQuestion(config: GameState['config']): Question {
  const mode = config?.mode === 'table' ? 'table' : 'mixed';
  if (mode === 'table') {
    const table = clampOperand(Number(config?.tableNumber));
    const other = randomOperand();
    return { a: table, b: other, product: table * other };
  }
  const a = randomOperand();
  const b = randomOperand();
  return { a, b, product: a * b };
}

export function initGameState(config: GameConfig = {}): GameState {
  return {
    config: {
      mode: config.mode === 'table' ? 'table' : 'mixed',
      tableNumber:
        config.mode === 'table' ? clampOperand(Number(config.tableNumber)) : null,
    },
    currentQuestion: null,
    currentStreak: 0,
    totalAnswered: 0,
    totalCorrect: 0,
  };
}

export function getNextQuestion(state: GameState): Question | null {
  if (!state || typeof state !== 'object') {
    return null;
  }
  const previous = state.currentQuestion;
  let question = buildQuestion(state.config);
  if (previous && previous.a === question.a && previous.b === question.b) {
    question = buildQuestion(state.config);
  }
  state.currentQuestion = question;
  return question;
}

export function checkAnswer(state: GameState, userInput: number): CheckResult {
  if (!state || typeof state !== 'object') {
    return { correct: false };
  }
  const question = state.currentQuestion;
  if (!question) {
    return { correct: false };
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

export function resetSession(state: GameState): void {
  if (!state || typeof state !== 'object') {
    return;
  }
  state.currentQuestion = null;
  state.currentStreak = 0;
  state.totalAnswered = 0;
  state.totalCorrect = 0;
}
