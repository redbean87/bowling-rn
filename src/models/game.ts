import { Frame } from './frame';

export type Game = {
  id: number;
  frames: Frame[];
  currentFrame: number;
  currentRoll: number;
  totalScore: number;
  isComplete: boolean;
  playerId?: number;
  startTime: number;
  endTime?: number;
  status: 'in_progress' | 'completed' | 'paused';
};
