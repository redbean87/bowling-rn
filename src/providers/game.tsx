import React from 'react';

import useGameReducer, { createGameContext } from '../reducers/game';

const GameContext = createGameContext();

function GameProvider(props) {
  return <GameContext.Provider value={useGameReducer()} {...props} />;
}

function useGame() {
  const [state, dispatch] = React.useContext(GameContext);

  const onFramePress = (frameIndex) =>
    dispatch({ type: 'ON_FRAME_PRESS', payload: frameIndex });

  return {
    ...state,
    state,
    onFramePress,
  };
}

export { GameProvider, useGame };
