import React from 'react';

import { useGame } from '../providers/game';

import ScoreboardComponent from '../components/Game/Scoreboard';

const ScoreboardContainer = () => {
  const { actions, state } = useGame();
  return <ScoreboardComponent {...actions} {...state} />;
};

export default function ScoreBoard() {
  return <ScoreboardContainer />;
}
