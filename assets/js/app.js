import { initGameState } from './game.js';
import { bindUi } from './ui.js';

const body = document.body;
const pageMode = body.dataset.mode === 'table' ? 'table' : 'mixed';
const tableNumber = body.dataset.table ? Number(body.dataset.table) : null;

const config = {
  mode: pageMode,
  tableNumber,
};

const state = initGameState(config);
bindUi(state);
