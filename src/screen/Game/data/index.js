import * as game from './game';

let setState = () => {};

export const data = { ...game.withId(0), count: 0 };

export const updateGame = () => {
  data.count = ++data.count;
  // console.log('count', data.count);
  return data;
};

export const getGame = () => {
  return data;
};

export const setSetState = fn => {
  // console.log('fn', fn);
  setState = fn;
};

export const actions = {
  updateGame
};
export default data;
