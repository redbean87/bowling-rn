import * as game from './game';

export const data = { ...game.withId(0), count: 0 };

export const updatePinDown = () => {
  data.count = data.count++;
};

export const getGame = () => {
  return data;
};

export default data;
