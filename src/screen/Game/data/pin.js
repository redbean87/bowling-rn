import * as utils from './utils';
const data = {
  id: 0,
  frameId: 0,
  position: 0,
  rollKnockedDown: null,
  down: false
};

export const withId = id => {
  return {
    ...data,
    id,
    position: id + 1,
    down: utils.randomBool()
  };
};

export default data;
