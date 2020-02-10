import React from 'react';

import { GameProvider, useGame } from '../providers/game';

import ScoreboardComponent from '../components/Game/Scoreboard';

const ScoreboardContainer = () => {
  const { actions, state } = useGame();
  return <ScoreboardComponent {...actions} {...state} />;
};

export default function ScoreBoard() {
  return (
    <GameProvider>
      <ScoreboardContainer />
    </GameProvider>
  );
}
