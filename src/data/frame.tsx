import { createPin } from './pin';
import { Frame } from '../models/frame';

export const createFrame = (gameId: number, id = 0): Frame => ({
  id,
  gameId,
  position: id + 1,
  pins: [
    createPin(id, 0),
    createPin(id, 1),
    createPin(id, 2),
    createPin(id, 3),
    createPin(id, 4),
    createPin(id, 5),
    createPin(id, 6),
    createPin(id, 7),
    createPin(id, 8),
    createPin(id, 9),
  ],
  rolls: [],
  score: 0,
  isStrike: false,
  isSpare: false,
  isComplete: false,
  isTenthFrame: id === 9,
});
