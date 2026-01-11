import { checkAnswer, getNextQuestion } from './game.js';
import { getBestStreak, resetBestStreak, setBestStreak } from './storage.js';

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
  const submitButton = document.querySelector('[data-submit]');
  const resetCurrentButton = document.querySelector('[data-reset-current]');

  const streakValue = document.querySelector('[data-streak]');
  const bestStreakValue = document.querySelector('[data-best-streak]');
  const currentStreakStat = streakValue?.closest('.stat') ?? null;
  const bestStreakStat = bestStreakValue?.closest('.stat') ?? null;

  const uiState = {
    isSubmitting: false,
    feedbackTimeoutId: null,
    nextQuestionTimeoutId: null,
    bestStreak: getBestStreak(modeKey),
    bestStreakHighlightTimeoutId: null,
    currentStreakHighlightTimeoutId: null,
  };
  let isTouchSubmit = false;

  function setFeedback(message) {
    if (!feedback) {
      return;
    }
    feedback.textContent = message;
    feedback.classList.remove('is-correct', 'is-incorrect');
    if (message === 'Correct!') {
      feedback.classList.add('is-correct');
    } else if (message.startsWith('Try again —') || message.startsWith('Correct answer was')) {
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

  function resetCurrentStreak() {
    state.currentStreak = 0;
    if (input) {
      input.disabled = false;
      input.value = '';
    }
    setFeedback('');
    if (uiState.nextQuestionTimeoutId) {
      clearTimeout(uiState.nextQuestionTimeoutId);
      uiState.nextQuestionTimeoutId = null;
    }
    prepareNextQuestion();
    updateStats();
    focusInput();
  }

  function triggerHighlight(statElement, timeoutKey) {
    if (!statElement) {
      return;
    }
    statElement.classList.remove('is-highlight');
    void statElement.offsetWidth;
    statElement.classList.add('is-highlight');
    if (uiState[timeoutKey]) {
      clearTimeout(uiState[timeoutKey]);
    }
    uiState[timeoutKey] = window.setTimeout(() => {
      statElement.classList.remove('is-highlight');
      uiState[timeoutKey] = null;
    }, 750);
  }

  function updateBestScores() {
    if (state.currentStreak > uiState.bestStreak) {
      uiState.bestStreak = setBestStreak(modeKey, state.currentStreak);
      triggerHighlight(bestStreakStat, 'bestStreakHighlightTimeoutId');
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

    const previousStreak = state.currentStreak;
    uiState.isSubmitting = true;
    const result = checkAnswer(state, parsed);
    if (result.correct) {
      setFeedback('Correct!');
      if (state.currentStreak > previousStreak) {
        triggerHighlight(currentStreakStat, 'currentStreakHighlightTimeoutId');
      }
      updateBestScores();
      input.value = '';
      prepareNextQuestion();
      updateStats();
      uiState.isSubmitting = false;
      return;
    }

    setFeedback(`Correct answer was ${result.correctAnswer}`);
    updateStats();
    input.value = '';
    if (input) {
      input.disabled = true;
    }
    if (uiState.nextQuestionTimeoutId) {
      clearTimeout(uiState.nextQuestionTimeoutId);
    }
    uiState.nextQuestionTimeoutId = window.setTimeout(() => {
      if (input) {
        input.disabled = false;
      }
      prepareNextQuestion();
      uiState.isSubmitting = false;
      uiState.nextQuestionTimeoutId = null;
    }, 800);
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

  if (resetCurrentButton) {
    resetCurrentButton.addEventListener('click', (event) => {
      event.preventDefault();
      resetCurrentStreak();
    });
  }

  if (submitButton) {
    const triggerSubmit = () => {
      if (uiState.isSubmitting) {
        return;
      }
      handleSubmit();
    };
    submitButton.addEventListener('click', (event) => {
      if (isTouchSubmit) {
        event.preventDefault();
        return;
      }
      triggerSubmit();
    });
    submitButton.addEventListener(
      'touchend',
      (event) => {
        event.preventDefault();
        isTouchSubmit = true;
        triggerSubmit();
        window.setTimeout(() => {
          isTouchSubmit = false;
        }, 400);
      },
      { passive: false },
    );
  }

  const resetBestButton = document.querySelector('[data-reset-best]');
  if (resetBestButton) {
    resetBestButton.addEventListener('click', (event) => {
      event.preventDefault();
      const ok = window.confirm('Reset your best streak for this table?');
      if (!ok) {
        return;
      }
      resetBestStreak(modeKey);
      state.currentStreak = 0;
      if (input) {
        input.disabled = false;
        input.value = '';
      }
      setFeedback('');
      if (uiState.nextQuestionTimeoutId) {
        clearTimeout(uiState.nextQuestionTimeoutId);
        uiState.nextQuestionTimeoutId = null;
      }
      prepareNextQuestion();
      uiState.bestStreak = 0;
      updateStats();
      focusInput();
    });
  }

  prepareNextQuestion();
  updateStats();
  focusInput();
}
