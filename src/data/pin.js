import * as utils from './utils';

const data = (frameId, id = 0) => ({
  id,
  frameId,
  position: id + 1,
  rollKnockedDown: null,
  down: utils.randomBool()
});

export const withId = (frameId, id) => {
  return data(frameId, id);
};

export default data;
