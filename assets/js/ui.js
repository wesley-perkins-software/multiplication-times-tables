import { checkAnswer, getNextQuestion, resetSession } from './game.js';
import {
  getBestStreak,
  getBestTimedScore,
  resetAllStats,
  setBestStreak,
  setBestTimedScore,
} from './storage.js';

const PRACTICE_MODE = 'practice';
const TIMED_MODE = 'timed';
const TOTAL_TIME = 60;

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
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : null;
}

export function bindUi(state) {
  const config = state?.config ?? { mode: 'mixed', tableNumber: null };
  const modeKey = getModeKey(config);

  const problem = document.querySelector('[data-problem]');
  const input = document.querySelector('#answer-input');
  const feedback = document.querySelector('[data-feedback]');
  const resetButton = document.querySelector('[data-reset]');
  const modeButtons = document.querySelectorAll('[data-mode-button]');

  const streakValue = document.querySelector('[data-streak]');
  const bestStreakValue = document.querySelector('[data-best-streak]');
  const timeValue = document.querySelector('[data-time]');
  const scoreValue = document.querySelector('[data-score]');
  const bestScoreValue = document.querySelector('[data-best-score]');

  const uiState = {
    mode: PRACTICE_MODE,
    isSubmitting: false,
    feedbackTimeoutId: null,
    timerId: null,
    timeLeft: TOTAL_TIME,
    bestStreak: getBestStreak(modeKey),
    bestTimedScore: getBestTimedScore(modeKey),
  };

  function setFeedback(message) {
    if (!feedback) {
      return;
    }
    feedback.textContent = message;
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

  function updateStatLabel(valueElement, labelText) {
    if (!valueElement) {
      return;
    }
    const label = valueElement.previousElementSibling;
    if (label && label.classList.contains('label')) {
      label.textContent = labelText;
    }
  }

  function setStatVisibility(valueElement, isVisible) {
    if (!valueElement) {
      return;
    }
    const container = valueElement.closest('.stat');
    if (container) {
      container.hidden = !isVisible;
    }
  }

  function renderQuestion() {
    if (!problem || !state.currentQuestion) {
      return;
    }
    const { a, b } = state.currentQuestion;
    problem.textContent = `${a} × ${b} = ?`;
  }

  function updateAccuracy() {
    if (!timeValue) {
      return;
    }
    const answered = state.totalAnswered;
    const correct = state.totalCorrect;
    const accuracy = answered === 0 ? 0 : Math.round((correct / answered) * 100);
    timeValue.textContent = `${accuracy}%`;
  }

  function updateStats() {
    if (uiState.mode === PRACTICE_MODE) {
      setStatVisibility(streakValue, true);
      setStatVisibility(bestStreakValue, true);
      setStatVisibility(timeValue, true);
      setStatVisibility(scoreValue, false);
      setStatVisibility(bestScoreValue, false);

      updateStatLabel(streakValue, 'Streak');
      updateStatLabel(bestStreakValue, 'Best');
      updateStatLabel(timeValue, 'Accuracy');

      if (streakValue) {
        streakValue.textContent = String(state.currentStreak);
      }
      if (bestStreakValue) {
        bestStreakValue.textContent = String(uiState.bestStreak);
      }
      updateAccuracy();
    } else {
      setStatVisibility(streakValue, false);
      setStatVisibility(bestStreakValue, false);
      setStatVisibility(timeValue, true);
      setStatVisibility(scoreValue, true);
      setStatVisibility(bestScoreValue, true);

      updateStatLabel(timeValue, 'Time');
      updateStatLabel(scoreValue, 'Score');
      updateStatLabel(bestScoreValue, 'Best');

      if (timeValue) {
        timeValue.textContent = String(uiState.timeLeft);
      }
      if (scoreValue) {
        scoreValue.textContent = String(state.totalCorrect);
      }
      if (bestScoreValue) {
        bestScoreValue.textContent = String(uiState.bestTimedScore);
      }
    }
  }

  function focusInput() {
    if (input && !input.disabled) {
      input.focus();
      input.select();
    }
  }

  function startTimer() {
    if (uiState.timerId) {
      clearInterval(uiState.timerId);
    }
    uiState.timeLeft = TOTAL_TIME;
    uiState.timerId = window.setInterval(() => {
      uiState.timeLeft -= 1;
      if (uiState.timeLeft <= 0) {
        uiState.timeLeft = 0;
        clearInterval(uiState.timerId);
        uiState.timerId = null;
        if (input) {
          input.disabled = true;
        }
        setFeedback('Time is up!');
      }
      updateStats();
    }, 1000);
  }

  function stopTimer() {
    if (uiState.timerId) {
      clearInterval(uiState.timerId);
      uiState.timerId = null;
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
    if (uiState.mode === TIMED_MODE) {
      startTimer();
    } else {
      stopTimer();
      uiState.timeLeft = TOTAL_TIME;
    }
    setFeedback('');
    prepareNextQuestion();
    updateStats();
  }

  function updateBestScores() {
    if (uiState.mode === PRACTICE_MODE) {
      if (state.currentStreak > uiState.bestStreak) {
        uiState.bestStreak = setBestStreak(modeKey, state.currentStreak);
      }
    } else if (state.totalCorrect > uiState.bestTimedScore) {
      uiState.bestTimedScore = setBestTimedScore(modeKey, state.totalCorrect);
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

  function setMode(newMode) {
    uiState.mode = newMode;
    modeButtons.forEach((button) => {
      const isActive = button.dataset.modeButton === newMode;
      button.setAttribute('aria-pressed', String(isActive));
    });
    restartSession();
  }

  if (modeButtons.length) {
    modeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const requestedMode =
          button.dataset.modeButton === TIMED_MODE ? TIMED_MODE : PRACTICE_MODE;
        if (requestedMode !== uiState.mode) {
          setMode(requestedMode);
        }
      });
    });
  }

  if (input) {
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
      uiState.bestTimedScore = 0;
      updateStats();
    });
  }

  prepareNextQuestion();
  updateStats();
  focusInput();
}
