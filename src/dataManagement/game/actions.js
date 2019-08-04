import produce from 'immer';

import data from '../../data';

export const newGame = (id = 0) => {
  return data.game(id);
};

export const updatePin = (state, payload) => {
  const { frameIndex, pinIndex, pin } = payload;

  return produce(state, draft => {
    draft.frames[frameIndex].pins[pinIndex] = pin;
  });
};
