import { Pin } from './pin';

export type Frame = {
  id: number;
  gameId: number;
  position: number;
  pins: Pin[];
};
