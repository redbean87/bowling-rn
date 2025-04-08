import { Pin } from './pin';
import { Roll } from './roll';

export type Frame = {
  id: number;
  gameId: number;
  position: number; // Required for maintaining order in database
  pins: Pin[];
  rolls: Roll[];
  score?: number;
  isStrike: boolean;
  isSpare: boolean;
  isComplete: boolean;
  bonusRolls?: number; // For strike/spare bonus tracking
  isTenthFrame: boolean;
};

export type { Roll };
