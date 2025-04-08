export type Roll = {
  id: number;
  frameId: number;
  rollNumber: number; // 1 or 2 (or 3 for 10th frame)
  pinsKnockedDown: number;
  timestamp: number;
  isStrike: boolean;
  isSpare: boolean;
};
