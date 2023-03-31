import React, { useState } from 'react';

import { fetchGame, useGame } from '../../api';
import { create } from 'zustand';

const MAX_FRAME_INDEX = 9;

const maxFrameCheck = (frameIndex: number) => frameIndex >= MAX_FRAME_INDEX;

export const useGameStore = create((set, get) => {
  return {
    frames: [],
    frameIndex: 0,
    frame: {},
    isStrikeBall: true,
    actions: {
      setFrameIndex: (value: number) => set(() => ({ frameIndex: value })),
      setIsStrikeBall: (value: boolean) => set(() => ({ isStrikeBall: value })),
      onStrikePress: () =>
        set((state) => {
          const { frameIndex } = state;
          if (maxFrameCheck(frameIndex)) {
            return {};
          }
          return {
            frameIndex: frameIndex + 1,
            isStrikeBall: true,
          };
        }),
      onSparePress: () =>
        set((state) => {
          const { frameIndex } = state;
          if (maxFrameCheck(frameIndex)) {
            return {};
          }
          return {
            frameIndex: frameIndex + 1,
            isStrikeBall: true,
          };
        }),
      onNextPress: () => set(() => ({ isStrikeBall: false })),
    },
  };
});
