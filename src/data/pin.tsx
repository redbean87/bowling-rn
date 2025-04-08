// import * as utils from './utils';

import { Pin } from '../models/pin';

export const createPin = (frameId: number, id = 0): Pin => ({
  id,
  frameId,
  position: id + 1, // Required for maintaining order in database
  isDown: false,
});
