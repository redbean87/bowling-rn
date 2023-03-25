import React, { useState } from 'react';

import useGame from '../../api';

export const GameContext = React.createContext({
  frames: [],
  selectedFrameIndex: 0,
  frame: {},
  actions: { setSelectedFrameIndex: (value: number) => {} },
});

export const GameProvider = ({ children }) => {
  const { data } = useGame();
  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);

  const frames = data?.frames;
  const frame = frames?.[selectedFrameIndex];

  const value = {
    selectedFrameIndex,
    actions: { setSelectedFrameIndex },
    frames,
    frame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
