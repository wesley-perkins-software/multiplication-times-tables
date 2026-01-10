import { checkAnswer, getNextQuestion, resetSession } from './game.js';
import { getBestStreak, resetAllStats, setBestStreak } from './storage.js';

function getModeKey(config) {
  if (config.mode === 'table' && Number.isFinite(config.tableNumber)) {
    return `table-${config.tableNumber}`;
  }
  return 'mixed';
}

function normalizeInput(value) {
  if (typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }
  if (!/^[0-9]+$/.test(trimmed)) {
    return null;
  }
  const parsed = Number.parseInt(trimmed, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

export function bindUi(state) {
  const config = state?.config ?? { mode: 'mixed', tableNumber: null };
  const modeKey = getModeKey(config);

  const problem = document.querySelector('[data-problem]');
  const operandA = document.querySelector('[data-operand-a]');
  const operandB = document.querySelector('[data-operand-b]');
  const problemText = document.querySelector('[data-problem-text]');
  const input = document.querySelector('#answer-input');
  const feedback = document.querySelector('[data-feedback]');
  const resetButton = document.querySelector('[data-reset]');

  const streakValue = document.querySelector('[data-streak]');
  const bestStreakValue = document.querySelector('[data-best-streak]');

  const uiState = {
    isSubmitting: false,
    feedbackTimeoutId: null,
    bestStreak: getBestStreak(modeKey),
  };

  function setFeedback(message) {
    if (!feedback) {
      return;
    }
    feedback.textContent = message;
    feedback.classList.remove('is-correct', 'is-incorrect');
    if (message === 'Correct!') {
      feedback.classList.add('is-correct');
    } else if (message.startsWith('Try again —')) {
      feedback.classList.add('is-incorrect');
    }
    if (uiState.feedbackTimeoutId) {
      clearTimeout(uiState.feedbackTimeoutId);
      uiState.feedbackTimeoutId = null;
    }
    if (message === 'Correct!') {
      uiState.feedbackTimeoutId = window.setTimeout(() => {
        if (feedback.textContent === 'Correct!') {
          feedback.textContent = '';
        }
      }, 600);
    }
  }

  function renderQuestion() {
    if (!problem || !state.currentQuestion) {
      return;
    }
    const { a, b } = state.currentQuestion;
    if (operandA) {
      operandA.textContent = String(a);
    }
    if (operandB) {
      operandB.textContent = String(b);
    }
    if (problemText) {
      problemText.textContent = `${a} × ${b}`;
    }
  }

  function updateStats() {
    if (streakValue) {
      streakValue.textContent = String(state.currentStreak);
    }
    if (bestStreakValue) {
      bestStreakValue.textContent = String(uiState.bestStreak);
    }
  }

  function focusInput() {
    if (input && !input.disabled) {
      input.focus();
      input.select();
    }
  }

  function prepareNextQuestion() {
    getNextQuestion(state);
    renderQuestion();
    focusInput();
  }

  function restartSession() {
    resetSession(state);
    if (input) {
      input.disabled = false;
      input.value = '';
    }
    setFeedback('');
    prepareNextQuestion();
    updateStats();
  }

  function updateBestScores() {
    if (state.currentStreak > uiState.bestStreak) {
      uiState.bestStreak = setBestStreak(modeKey, state.currentStreak);
    }
  }

  function handleSubmit() {
    if (uiState.isSubmitting) {
      return;
    }
    if (!input || input.disabled) {
      return;
    }
    const parsed = normalizeInput(input.value);
    if (parsed === null) {
      setFeedback('Enter a number.');
      focusInput();
      return;
    }

    uiState.isSubmitting = true;
    const result = checkAnswer(state, parsed);
    if (result.correct) {
      setFeedback('Correct!');
      updateBestScores();
    } else {
      setFeedback(`Try again — correct was ${result.correctAnswer}`);
    }
    input.value = '';
    prepareNextQuestion();
    updateStats();
    uiState.isSubmitting = false;
  }

  if (input) {
    input.addEventListener('input', () => {
      const digitsOnly = input.value.replace(/[^0-9]/g, '');
      if (input.value !== digitsOnly) {
        input.value = digitsOnly;
      }
    });
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === 'NumpadEnter') {
        event.preventDefault();
        handleSubmit();
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      restartSession();
    });
  }

  const resetBestButton = document.querySelector('[data-reset-best]');
  if (resetBestButton) {
    resetBestButton.addEventListener('click', (event) => {
      event.preventDefault();
      resetAllStats();
      uiState.bestStreak = 0;
      updateStats();
    });
  }

  prepareNextQuestion();
  updateStats();
  focusInput();
}
