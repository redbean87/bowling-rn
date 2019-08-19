import produce from 'immer';

import data from '../../data';
import * as dataUtils from '../../dataManagement/utils';

export const newGame = (id = 0) => {
  return data.game(id);
};

export const handleStrikePress = (state, payload) => {
  return produce(state, draft => {
    const { currentRoll, frame = {} } = payload;
    const { pins = [] } = frame;
    const frameIndex = frame.position - 1;

    draft.frames[frameIndex].pins = pins.map(pin => {
      return dataUtils.mergeObjects(pin, {
        down: currentRoll
      });
    });
  });
};

export const handleSparePress = (state, payload) => {
  return produce(state, draft => {
    const { currentRoll, frame = {} } = payload;
    const { pins = [] } = frame;
    const frameIndex = frame.position - 1;

    draft.frames[frameIndex].pins = pins.map(pin => {
      if (pin.down !== 0) {
        return pin;
      }

      return dataUtils.mergeObjects(pin, {
        down: currentRoll
      });
    });
  });
};

export const handlePinPress = (state, payload) => {
  const { currentRoll, frame, pin } = payload;
  if (pin.down > 0 && pin.down !== currentRoll) {
    return;
  }

  let down = 0;
  if (pin.down !== currentRoll) {
    down = currentRoll;
  }

  return updatePin(state, {
    frame,
    pin: dataUtils.mergeObjects(pin, {
      down
    })
  });
};

export const updatePin = (state, payload) => {
  return produce(state, draft => {
    const { frame, pin } = payload;
    const frameIndex = frame.position - 1;
    const pinIndex = pin.position - 1;

    draft.frames[frameIndex].pins[pinIndex] = pin;
  });
};
