import React, { useState } from 'react';

import { game } from '../../dataManagement';

import Game from './Game';

const newGameData = game.newGame();

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
  return (frameIndex, currentRoll, pin) => {
    updateGame(game.updatePin(frameIndex, currentRoll, pin));
  };
};
