import React, { useState } from "react";

import useGame from "../../api";

export const GameContext = React.createContext({
  selectedFrameIndex: 0,
  setSelectedFrameIndex: () => {},
  frame: {},
});

export const GameProvider = ({ children }) => {
  const { data } = useGame();
  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);

  const frame = data?.frames[selectedFrameIndex];

  const value = { selectedFrameIndex, setSelectedFrameIndex, frame };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
