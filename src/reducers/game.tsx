import produce from 'immer';

import { getGameData } from '../data';

export const INITIAL_STATE = {
  ...getGameData(),
  selectedFrame: 1,
};

const gameReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ON_FRAME_PRESS': {
      draft.selectedFrame = action.payload;
      break;
    }
    default:
      break;
  }
});

export default gameReducer;
