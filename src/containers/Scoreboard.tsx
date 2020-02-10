import React from 'react';

import { GameProvider, useGame } from '../providers/game';

import Scoreboard from '../components/Scoreboard';

const ScoreboardContainer = () => {
  const { actions, state } = useGame();
  return <Scoreboard {...actions} {...state} />;
};

export default function ScoreBoardIndex() {
  return (
    <GameProvider>
      <ScoreboardContainer />
    </GameProvider>
  );
}
