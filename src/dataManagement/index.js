import data from '../data';

let gameData;

export const newGame = (id = 0) => {
  gameData = data.game(id);
  return gameData;
};

export const updateFrame = (frameIndex, newFrame) => {
  return {};
};

export const updatePin = (frameIndex, pinIndex, newPin) => {
  console.log('updatePin', frameIndex, pinIndex, newPin);
  const { frames = [] } = gameData;
  gameData = {
    ...gameData,
    frames: frames.map((frame = {}, fIndex) => {
      if (fIndex === frameIndex) {
        const { pins = [] } = frame;
        return {
          ...frame,
          pins: pins.map((pin = {}, pIndex) => {
            if (pIndex === pinIndex) {
              return { ...pin, ...newPin };
            }
            return pin;
          })
        };
      }
      return frame;
    })
  };
  return gameData;
};

export const actions = {
  updatePin
};
