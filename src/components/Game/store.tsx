import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const MAX_FRAME_INDEX = 9;

const maxFrameCheck = (frameIndex: number) => frameIndex >= MAX_FRAME_INDEX;

interface GameStore {
  frameIndex: number;
  rollIndex: number;
  isStrikeBall: () => boolean;
  setFrameIndex: (value: number) => void;
  onStrikePress: () => void;
  onSparePress: () => void;
  onNextPress: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => {
      return {
        frameIndex: 0,
        rollIndex: 0,
        isStrikeBall: () => {
          const { frameIndex, rollIndex } = get();
          if (maxFrameCheck(frameIndex)) {
            return true;
          }
          return rollIndex === 0;
        },
        setFrameIndex: (value: number) => set(() => ({ frameIndex: value })),
        onStrikePress: () =>
          set((state) => {
            const { frameIndex } = state;
            if (maxFrameCheck(frameIndex)) {
              return {};
            }
            return {
              frameIndex: frameIndex + 1,
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
            };
          }),
        onNextPress: () =>
          set((state) => {
            const { frameIndex, rollIndex } = state;
            if (maxFrameCheck(frameIndex)) {
              return {};
            }
            if (rollIndex > 0) {
              return { frameIndex: frameIndex + 1, rollIndex: 0 };
            }
            return { rollIndex: 1 };
          }),
      };
    },
    {
      name: 'game-state',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
