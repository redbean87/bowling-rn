import React from 'react';

import { useGame } from '../providers/game';

import LaneComponent from '../components/Game/Lane';

const LaneContainer = () => {
  const { actions, state } = useGame();
  const { frames, selectedFrame } = state;
  const frame = frames[selectedFrame - 1];
  return <LaneComponent {...actions} {...{ frame }} />;
};

export default function Lane() {
  return <LaneContainer />;
}
