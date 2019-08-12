import * as utils from './utils';

const data = (frameId, id = 0) => {
  const position = id + 1;
  const maxDownPosition = position === 10 ? 2 : 1;
  return {
    id,
    frameId,
    position,
    downPosition: utils.randomNum(maxDownPosition),
    down: utils.randomBool()
  };
};

export default data;
