import { createFrame } from './frame';
import { Game } from '../models/game';

export const createGame = (id = 0): Game => ({
  id,
  frames: [
    createFrame(id, 0),
    createFrame(id, 1),
    createFrame(id, 2),
    createFrame(id, 3),
    createFrame(id, 4),
    createFrame(id, 5),
    createFrame(id, 6),
    createFrame(id, 7),
    createFrame(id, 8),
    createFrame(id, 9),
  ],
  currentFrame: 0,
  currentRoll: 0,
  totalScore: 0,
  isComplete: false,
  startTime: Date.now(),
  status: 'in_progress',
});

export default createGame;
