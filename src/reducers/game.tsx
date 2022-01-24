import produce from "immer";
import { createContext, useReducer } from "react";

import { getGameData } from "../data";

export const INITIAL_STATE = {
  ...getGameData(),
  selectedFrame: 1,
};

export const createGameContext = () => createContext(INITIAL_STATE);

const gameReducer = () =>
  useReducer(
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
