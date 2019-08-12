import { withMeta } from '../utils';

import { newGame, updatePin } from './actions';

let gameData = {};

export default {
  newGame: () => {
    gameData = newGame();
    return withMeta(gameData);
  },
  updatePin: (frameIndex, pinIndex, pin) => {
    gameData = updatePin(gameData, { frameIndex, pinIndex, pin });
    return withMeta(gameData);
  }
};
