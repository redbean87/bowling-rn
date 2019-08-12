import * as utils from './utils';

const data = (frameId, id = 0) => {
  const position = id + 1;
  const down = utils.randomBool();
  const maxDownPosition = position === 10 ? 2 : 1;
  const downPosition = down ? utils.randomNum(maxDownPosition) : false;
  return {
    id,
    frameId,
    position,
    down,
    downPosition
  };
};

export default data;
