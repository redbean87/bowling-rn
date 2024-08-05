import pin from './pin';
import { Frame } from '../models/frame';

const data = (gameId: number, id = 0): Frame => ({
  id,
  gameId,
  position: id + 1,
  pins: [
    pin(id, 0),
    pin(id, 1),
    pin(id, 2),
    pin(id, 3),
    pin(id, 4),
    pin(id, 5),
    pin(id, 6),
    pin(id, 7),
    pin(id, 8),
    pin(id, 9),
  ],
});

export default data;
