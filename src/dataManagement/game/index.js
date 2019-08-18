import { withMeta } from '../utils';

import { newGame, updatePin } from './actions';

let gameData = {};

export default {
  newGame: () => {
    gameData = newGame();
    return withMeta(gameData);
  },
  updatePin: (frame, currentRoll, pin) => {
    gameData = updatePin(gameData, {
      frame,
      currentRoll,
      pin
    });
    return withMeta(gameData);
  }
};
