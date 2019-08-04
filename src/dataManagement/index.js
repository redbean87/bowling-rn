import data from '../data';
import { mergeObjects } from './utils';

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
  return mergeGameDate(frameIndex, newPin, pinIndex);
};

export const actions = {
  updatePin
};

const mergeGameDate = (frameIndex, newPin, pinIndex) => {
  const { frames = [] } = gameData;
  return mergeObjects(gameData, {
    frames: mergeFrame(frames, frameIndex, newPin, pinIndex)
  });
};

const mergeFrame = (frames, frameIndex, newPin, pinIndex) => {
  return frames.map((frame = {}, fIndex) => {
    if (fIndex === frameIndex) {
      const { pins = [] } = frame;
      return mergeObjects(frame, { pins: mergePin(pins, newPin, pinIndex) });
    }
    return frame;
  });
};

const mergePin = (pins, newPin, pinIndex) => {
  return pins.map((pin = {}, pIndex) => {
    if (pIndex === pinIndex) {
      return mergeObjects(pin, newPin);
    }
    return pin;
  });
};
