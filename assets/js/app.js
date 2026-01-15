import { initGameState } from './game.js';
import { bindUi } from './ui.js';

if (typeof window.mtimesTrack !== 'function') {
  window.mtimesTrack = (eventName, params = {}) => {
    if (typeof window.gtag !== 'function') {
      return;
    }
    window.gtag('event', eventName, params);
  };
}

const body = document.body;
const pageMode = body.dataset.mode === 'table' ? 'table' : 'mixed';
const tableNumber = body.dataset.table ? Number(body.dataset.table) : null;

const config = {
  mode: pageMode,
  tableNumber,
};

const state = initGameState(config);
bindUi(state);
