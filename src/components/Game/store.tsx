import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { maxFrameCheck } from './utils';

interface GameStore {
  frames: any;
  frameIndex: number;
  rollIndex: number;
  isStrikeBall: () => boolean;
  setFrames: (frames: any) => void;
  setFrameIndex: (value: number) => void;
  onStrikePress: () => void;
  onSparePress: () => void;
  onNextPress: () => void;
  onPinPress: (pin: any) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    immer((set, get) => {
      return {
        frames: [],
        frameIndex: 0,
        rollIndex: 0,
        isStrikeBall: () => {
          const { frameIndex, rollIndex } = get();
          if (maxFrameCheck(frameIndex)) {
            return true;
          }
          return rollIndex === 0;
        },
        setFrames: (frames) => set(() => ({ frames })),
        setFrameIndex: (frameIndex: number) =>
          set((state) => {
            state.frameIndex = frameIndex;
          }),
        onStrikePress: () =>
          set((state) => {
            const { frameIndex, rollIndex } = state;
            if (maxFrameCheck(frameIndex)) {
              if (rollIndex < 2) {
                state.rollIndex += 1;
                return;
              }
              state.frameIndex = 0;
              return;
            }
            state.frameIndex += 1;
          }),
        onSparePress: () =>
          set((state) => {
            const { frameIndex } = state;
            if (maxFrameCheck(frameIndex)) {
              state.frameIndex = 0;
              return;
            }
            state.frameIndex += 1;
            state.rollIndex = 0;
          }),
        onNextPress: () =>
          set((state) => {
            const { frameIndex, rollIndex } = state;
            if (maxFrameCheck(frameIndex)) {
              if (rollIndex < 2) {
                state.rollIndex += 1;
                return;
              }
              state.frameIndex = 0;
              return;
            }
            if (rollIndex > 0) {
              state.frameIndex += 1;
              state.rollIndex = 0;
              return;
            }
            state.rollIndex = 1;
          }),
        onPinPress: (pin: any) =>
          set((state) => {
            const { position, down } = pin;
            const { frameIndex } = state;
            state.frames[frameIndex].pins[position - 1].down = !down;
          }),
      };
    }),
    {
      name: 'game-state',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
