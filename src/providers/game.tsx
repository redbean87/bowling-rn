import React from 'react';

import initialState from '../data/game';

import gameReducer from '../reducers/game';

const GameContext = React.createContext();

function GameProvider(props) {
  const [state, dispatch] = React.useReducer(gameReducer, getInitialState());
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <GameContext.Provider value={value} {...props} />;
}

function useGame() {
  const context = React.useContext(GameContext);

  if (!context) {
    throw new Error(`useGame must be used within a GameProvider`);
  }

  const [state, dispatch] = context;

  const onFramePress = value =>
    dispatch({ type: 'ON_FRAME_PRESS', payload: value });

  return {
    state,
    dispatch,
    actions: {
      onFramePress
    }
  };
}

const getInitialState = () => {
  return {
    ...initialState(),
    selectedFrame: 1
  };
};

export { GameProvider, useGame };
