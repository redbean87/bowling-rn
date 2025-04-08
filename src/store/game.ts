import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { Frame, Roll } from '../models/frame';
import { calculateFrameScore, isFrameComplete, isSpare, isStrike } from '../utils/scoring';

interface GameStore {
  frames: Frame[];
  frameIndex: number;
  rollIndex: number;
  isStrikeBall: () => boolean;
  setFrames: (frames: Frame[]) => void;
  setFrameIndex: (value: number) => void;
  onStrikePress: () => void;
  onSparePress: () => void;
  onNextPress: () => void;
  onPinPress: (pin: { position: number; isDown: boolean }) => void;
  addRoll: (pinsKnockedDown: number) => void;
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
          const currentFrame = get().frames[frameIndex];
          if (currentFrame?.isTenthFrame) {
            return true;
          }
          return rollIndex === 0;
        },
        setFrames: (frames) => set(() => ({ frames })),
        setFrameIndex: (frameIndex: number) =>
          set((state) => {
            state.frameIndex = frameIndex;
          }),
        addRoll: (pinsKnockedDown: number) =>
          set((state) => {
            const { frameIndex, rollIndex } = state;
            const currentFrame = state.frames[frameIndex];

            if (!currentFrame) return;

            const newRoll: Roll = {
              id: Date.now(),
              frameId: currentFrame.id,
              rollNumber: rollIndex + 1,
              pinsKnockedDown,
              timestamp: Date.now(),
              isStrike: pinsKnockedDown === 10,
              isSpare: false,
            };

            currentFrame.rolls.push(newRoll);
            currentFrame.isStrike = newRoll.isStrike;
            currentFrame.isSpare = isSpare(currentFrame);
            currentFrame.isComplete = isFrameComplete(currentFrame);

            if (currentFrame.isComplete) {
              // Calculate score for this frame
              const nextFrames = state.frames.slice(frameIndex + 1);
              currentFrame.score = calculateFrameScore(currentFrame, nextFrames);
            }

            // Update game state
            if (currentFrame.isTenthFrame) {
              if (currentFrame.isComplete) {
                state.frameIndex = 0;
                state.rollIndex = 0;
              } else {
                state.rollIndex += 1;
              }
            } else {
              if (currentFrame.isStrike) {
                state.frameIndex += 1;
                state.rollIndex = 0;
              } else if (rollIndex === 1) {
                state.frameIndex += 1;
                state.rollIndex = 0;
              } else {
                state.rollIndex += 1;
              }
            }
          }),
        onStrikePress: () =>
          set((state) => {
            state.addRoll(10);
          }),
        onSparePress: () =>
          set((state) => {
            const currentFrame = state.frames[state.frameIndex];
            const firstRoll = currentFrame.rolls[0];
            const pinsNeeded = 10 - (firstRoll?.pinsKnockedDown || 0);
            state.addRoll(pinsNeeded);
          }),
        onNextPress: () =>
          set((state) => {
            const { frameIndex, rollIndex } = state;
            const currentFrame = state.frames[frameIndex];

            if (currentFrame?.isTenthFrame) {
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
            }
            state.rollIndex = 1;
          }),
        onPinPress: (pin) =>
          set((state) => {
            const { position, isDown } = pin;
            const { frameIndex } = state;
            const currentFrame = state.frames[frameIndex];
            const currentPin = currentFrame.pins[position - 1];

            if (currentPin) {
              currentPin.isDown = !isDown;
              currentPin.rollNumber = state.rollIndex + 1;
              currentPin.timestamp = Date.now();
            }
          }),
      };
    }),
    {
      name: 'game-state',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
