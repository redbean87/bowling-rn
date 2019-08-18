import { withMeta } from '../utils';

import { newGame, updatePin } from './actions';

let gameData = {};

export default {
  newGame: () => {
    gameData = newGame();
    return withMeta(gameData);
  },
  updatePin: (frameIndex, currentRoll, pin) => {
    gameData = updatePin(gameData, {
      frameIndex,
      currentRoll,
      pin
    });
    return withMeta(gameData);
  }
};
