import React from 'react';
import produce from 'immer';

import { getGameData } from '../data';

export const INITIAL_STATE = {
  ...getGameData(),
  selectedFrame: 1,
};

export const createGameContext = () => React.createContext(INITIAL_STATE);

const gameReducer = () =>
  React.useReducer(
    produce((draft, action) => {
      switch (action.type) {
        case 'ON_FRAME_PRESS': {
          draft.selectedFrame = action.payload;
          break;
        }
        default:
          break;
      }
    }),
    INITIAL_STATE
  );

export default gameReducer;
