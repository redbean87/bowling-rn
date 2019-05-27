import * as utils from './utils';

const data = (frameId, id = 0) => ({
  id,
  frameId,
  position: id + 1,
  rollKnockedDown: null,
  down: utils.randomBool()
});

export default data;
