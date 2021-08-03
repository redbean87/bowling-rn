import React from 'react';

import gameReducer, { INITIAL_STATE } from '../reducers/game';

const GameContext = React.createContext();

function GameProvider(props) {
  const [state, dispatch] = React.useReducer(gameReducer, INITIAL_STATE);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <GameContext.Provider value={value} {...props} />;
}

function useGame() {
  const context = React.useContext(GameContext);

  if (!context) {
    throw new Error(`useGame must be used within a GameProvider`);
  }

  const [state, dispatch] = context;

  const onFramePress = (frameIndex) =>
    dispatch({ type: 'ON_FRAME_PRESS', payload: frameIndex });

  return {
    ...state,
    state,
    onFramePress,
  };
}

export { GameProvider, useGame };
