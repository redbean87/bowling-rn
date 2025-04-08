export type Pin = {
  id: number;
  frameId: number;
  position: number; // Required for maintaining order in database
  isDown: boolean;
  rollNumber?: number; // Which roll knocked this pin down (1, 2, or 3 for 10th frame)
  timestamp?: number; // When the pin was knocked down
};
