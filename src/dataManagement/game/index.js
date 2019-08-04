import { newGame, updatePin } from './actions';

let gameData = {};

export default {
  newGame: () => {
    gameData = newGame();
    return gameData;
  },
  updatePin: (frameIndex, pinIndex, pin) => {
    gameData = updatePin(gameData, { frameIndex, pinIndex, pin });
    return gameData;
  }
};
