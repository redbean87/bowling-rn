import produce from 'immer';

import data from '../../data';
import * as dataUtils from '../../dataManagement/utils';

export const newGame = (id = 0) => {
  return data.game(id);
};

export const updatePin = (state, payload) => {
  const { frameIndex, currentRoll, pin } = payload;

  return produce(state, draft => {
    if (pin.down > 0 && pin.down !== currentRoll) {
      return;
    }

    let down = 0;
    if (pin.down !== currentRoll) {
      down = currentRoll;
    }

    const pinIndex = pin.position - 1;
    draft.frames[frameIndex].pins[pinIndex] = dataUtils.mergeObjects(pin, {
      down
    });
  });
};
