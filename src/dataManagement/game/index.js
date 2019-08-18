import { withMeta } from '../utils';

import { newGame, handlePinPress, handleStrikePress } from './actions';

let gameData = {};

export default {
  newGame: () => {
    gameData = newGame();
    return withMeta(gameData);
  },
  handleStrikePress: (frame, currentRoll) => {
    gameData = handleStrikePress(gameData, {
      frame,
      currentRoll
    });
    return withMeta(gameData);
  },
  handlePinPress: (frame, currentRoll, pin) => {
    gameData = handlePinPress(gameData, {
      frame,
      currentRoll,
      pin
    });
    return withMeta(gameData);
  }
};
