import React, { useState } from 'react';

import useGame from '../../api';

const MAX_FRAME_INDEX = 9;

const maxFrameCheck = (frameIndex: number) => frameIndex >= MAX_FRAME_INDEX;

export const GameContext = React.createContext({
  actions: {
    setFrameIndex: (value: number) => {},
    setIsStrikeBall: (value: boolean) => {},
    onStrikePress: () => {},
    onSparePress: () => {},
    onNextPress: () => {},
  },
  data: { frames: [], frameIndex: 0, frame: {}, isStrikeBall: true },
});

export const GameProvider = ({ children }) => {
  const { data } = useGame();
  const [frameIndex, setFrameIndex] = useState(0);
  const [isStrikeBall, setIsStrikeBall] = useState(true);

  const onStrikePress = () => {
    if (maxFrameCheck(frameIndex)) {
      return;
    }
    setFrameIndex(frameIndex + 1);
    setIsStrikeBall(true);
  };

  const onSparePress = () => {
    if (maxFrameCheck(frameIndex)) {
      return;
    }
    setFrameIndex(frameIndex + 1);
    setIsStrikeBall(true);
  };

  const onNextPress = () => {
    setIsStrikeBall(false);
  };

  const frames = data?.frames ?? [];
  const frame = frames[frameIndex];

  const value = {
    data: { frameIndex, frames, frame, isStrikeBall },
    actions: {
      setFrameIndex,
      setIsStrikeBall,
      onStrikePress,
      onSparePress,
      onNextPress,
    },
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
