import * as utils from './utils';

const data = (frameId, id = 0) => {
  const position = id + 1;
  const down = utils.randomNum(2);

  /**
   * down
   * 0: still staning
   * 1,2,3: knocked down on a particular roll
   */
  return {
    id,
    frameId,
    position,
    down
  };
};

export default data;
