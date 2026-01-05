import { initGameState } from './game.js';
import { bindUi } from './ui.js';
import { readBestScores } from './storage.js';

const body = document.body;
const mode = body.dataset.mode || 'mixed';
const tableNumber = body.dataset.table ? Number(body.dataset.table) : null;

const config = {
  mode,
  tableNumber,
};

const state = initGameState(config, readBestScores(config));
bindUi(state, config);
