import { useEffect, useRef, useState } from 'react';
import { initGameState, getNextQuestion, checkAnswer } from '../lib/game';
import { getBestStreak, setBestStreak, resetBestStreak, getModeKey } from '../lib/storage';
import { launchConfetti } from '../lib/confetti';

interface Props {
  mode: 'mixed' | 'table';
  tableNumber?: number | null;
}

function track(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && typeof (window as Window & { mtimesTrack?: Function }).mtimesTrack === 'function') {
    (window as Window & { mtimesTrack: Function }).mtimesTrack(eventName, params);
  }
}

export default function GameWidget({ mode, tableNumber = null }: Props) {
  const modeKey = getModeKey(mode, tableNumber ?? null);
  const eventMode = mode === 'table' ? 'table' : 'mixed';
  const eventTable = typeof tableNumber === 'number' && Number.isFinite(tableNumber) ? tableNumber : null;

  const gameRef = useRef(initGameState({ mode, tableNumber: tableNumber ?? undefined }));

  const [question, setQuestion] = useState(() => {
    const q = getNextQuestion(gameRef.current)!;
    return { a: q.a, b: q.b };
  });
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | ''>('');
  const [locked, setLocked] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreakState] = useState(() => getBestStreak(modeKey));
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [currentStreakHighlight, setCurrentStreakHighlight] = useState(false);
  const [bestStreakHighlight, setBestStreakHighlight] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const isTouchSubmitRef = useRef(false);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const streakHighlightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const bestHighlightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!locked && inputRef.current) {
      inputRef.current.focus();
      try { inputRef.current.select(); } catch { /* ignore */ }
    }
  }, [locked, question]);

  function triggerStreakHighlight(setter: (v: boolean) => void, timerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) {
    setter(false);
    requestAnimationFrame(() => {
      setter(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setter(false), 750);
    });
  }

  function handleSubmit() {
    if (locked) return;
    const input = inputRef.current;
    if (!input) return;

    const raw = input.value.trim();
    if (!raw) {
      setFeedback('Enter a number.');
      setFeedbackType('');
      input.focus();
      return;
    }

    const parsed = parseInt(raw, 10);
    if (!Number.isFinite(parsed)) {
      setFeedback('Enter a number.');
      setFeedbackType('');
      input.focus();
      return;
    }

    track('check_answer', { mode: eventMode, table: eventTable });

    const gs = gameRef.current;
    const prevStreak = gs.currentStreak;
    const result = checkAnswer(gs, parsed);

    input.value = '';

    if (result.correct) {
      track('correct_answer', { mode: eventMode, table: eventTable });
      launchConfetti();

      if (gs.currentStreak > prevStreak) {
        triggerStreakHighlight(setCurrentStreakHighlight, streakHighlightTimerRef);
      }

      const currentBest = getBestStreak(modeKey);
      if (gs.currentStreak > currentBest) {
        const newBest = setBestStreak(modeKey, gs.currentStreak);
        setBestStreakState(newBest);
        triggerStreakHighlight(setBestStreakHighlight, bestHighlightTimerRef);
      }

      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
      setFeedback('Correct!');
      setFeedbackType('correct');
      setCurrentStreak(gs.currentStreak);
      setTotalAnswered(gs.totalAnswered);
      setTotalCorrect(gs.totalCorrect);

      const next = getNextQuestion(gs)!;
      setQuestion({ a: next.a, b: next.b });

      feedbackTimerRef.current = setTimeout(() => {
        setFeedback((prev) => (prev === 'Correct!' ? '' : prev));
      }, 600);
    } else {
      track('incorrect_answer', { mode: eventMode, table: eventTable });

      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
      setFeedback(`Correct answer was ${result.correctAnswer}`);
      setFeedbackType('incorrect');
      setCurrentStreak(gs.currentStreak);
      setTotalAnswered(gs.totalAnswered);
      setTotalCorrect(gs.totalCorrect);

      setLocked(true);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
      lockTimerRef.current = setTimeout(() => {
        const next = getNextQuestion(gs)!;
        setQuestion({ a: next.a, b: next.b });
        setLocked(false);
      }, 800);
    }
  }

  function handleResetCurrent() {
    if (gameRef.current.currentStreak > 0) {
      if (!window.confirm('Reset your current streak?')) return;
    }
    track('reset_streak', { streak_type: 'current', mode: eventMode, table: eventTable });

    const gs = gameRef.current;
    gs.currentStreak = 0;
    gs.totalAnswered = 0;
    gs.totalCorrect = 0;
    setCurrentStreak(0);
    setTotalAnswered(0);
    setTotalCorrect(0);
    setFeedback('');
    setFeedbackType('');
    if (lockTimerRef.current) { clearTimeout(lockTimerRef.current); lockTimerRef.current = null; }
    setLocked(false);
    const next = getNextQuestion(gs)!;
    setQuestion({ a: next.a, b: next.b });
    if (inputRef.current) inputRef.current.value = '';
  }

  function handleResetBest() {
    if (!window.confirm('Reset your longest streak?')) return;
    track('reset_streak', { streak_type: 'longest', mode: eventMode, table: eventTable });

    resetBestStreak(modeKey);
    const gs = gameRef.current;
    gs.currentStreak = 0;
    setCurrentStreak(0);
    setBestStreakState(0);
    setFeedback('');
    setFeedbackType('');
    if (lockTimerRef.current) { clearTimeout(lockTimerRef.current); lockTimerRef.current = null; }
    setLocked(false);
    const next = getNextQuestion(gs)!;
    setQuestion({ a: next.a, b: next.b });
    if (inputRef.current) inputRef.current.value = '';
  }

  function handleResetSession() {
    const gs = gameRef.current;
    gs.totalAnswered = 0;
    gs.totalCorrect = 0;
    setTotalAnswered(0);
    setTotalCorrect(0);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/[^0-9]/g, '');
    if (e.target.value !== digits) e.target.value = digits;
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === 'NumpadEnter') {
      e.preventDefault();
      handleSubmit();
    }
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLButtonElement>) {
    e.preventDefault();
    isTouchSubmitRef.current = true;
    handleSubmit();
    setTimeout(() => { isTouchSubmitRef.current = false; }, 400);
  }

  function handleClick() {
    if (isTouchSubmitRef.current) return;
    handleSubmit();
  }

  const sessionScore = totalAnswered === 0 ? '–' : `${totalCorrect} / ${totalAnswered}`;

  return (
    <section className="game">
      <div className="problem-card">
        <div className="problem" aria-hidden="true">
          <div className="problem-stack">
            <div className="operand-row operand-top">
              <span className="operand">{question.a}</span>
            </div>
            <div className="operand-row operand-bottom">
              <span className="operator">×</span>
              <span className="operand">{question.b}</span>
            </div>
            <div className="problem-rule"></div>
          </div>
        </div>
        <span className="sr-only" aria-live="polite">{question.a} × {question.b}</span>

        <label className="answer-label" htmlFor="answer-input">Your answer</label>
        <input
          ref={inputRef}
          id="answer-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          spellCheck={false}
          autoFocus
          autoComplete="off"
          enterKeyHint="done"
          disabled={locked}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <div
          className={`feedback${feedbackType === 'correct' ? ' is-correct' : feedbackType === 'incorrect' ? ' is-incorrect' : ''}`}
          aria-live="polite"
        >
          {feedback}
        </div>

        <button
          type="button"
          className="submit"
          onClick={handleClick}
          onTouchEnd={handleTouchEnd}
        >
          Check Answer
        </button>
        <p className="enter-hint" aria-hidden="true">or press Enter</p>
      </div>

      <div className="stats">
        <div className={`stat stat-current${currentStreakHighlight ? ' is-highlight' : ''}`}>
          <div className="stat-text">
            <span className="label">Current Streak</span>
            <span data-streak aria-live="polite">{currentStreak}</span>
          </div>
          <button type="button" className="stat-reset" onClick={handleResetCurrent}>
            Reset Current Streak
          </button>
        </div>

        <div className={`stat stat-best${bestStreakHighlight ? ' is-highlight' : ''}`}>
          <div className="stat-text">
            <span className="label">Longest Streak</span>
            <span data-best-streak aria-live="polite">{bestStreak}</span>
          </div>
          <button type="button" className="stat-reset stat-reset-best" onClick={handleResetBest}>
            Reset Longest Streak
          </button>
        </div>

        <div className="stat stat-session">
          <div className="stat-text">
            <span className="label">Session</span>
            <span data-session-score aria-live="polite">{sessionScore}</span>
          </div>
          <button type="button" className="stat-reset" onClick={handleResetSession}>
            Reset Session
          </button>
        </div>
      </div>
    </section>
  );
}
