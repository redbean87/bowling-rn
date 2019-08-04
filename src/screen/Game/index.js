import React, { useState } from 'react';

import * as dataManager from '../../dataManagement';

import Game from './Game';

const newGameData = dataManager.newGame();

export const GameIndex = () => {
  const [gameData, updateGame] = useState(newGameData);
  const { frames = [] } = gameData;
  return <Game actions={actions(updateGame)} frames={frames} />;
};

export default GameIndex;

const actions = updateGame => {
  return {
    handlePinPress: handlePinPress(updateGame)
  };
};

const handlePinPress = updateGame => {
  return (frameIndex, pinIndex, pin) => {
    updateGame(dataManager.actions.updatePin(frameIndex, pinIndex, pin));
  };
};
