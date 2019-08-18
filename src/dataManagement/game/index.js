import { withMeta } from '../utils';

import { newGame, updatePin } from './actions';

let gameData = {};

export default {
  newGame: () => {
    gameData = newGame();
    return withMeta(gameData);
  },
  updatePin: (frameIndex, currentRoll, pinIndex, pin) => {
    gameData = updatePin(gameData, {
      frameIndex,
      currentRoll,
      pinIndex,
      pin
    });
    return withMeta(gameData);
  }
};
