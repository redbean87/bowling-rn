import * as game from './game';

export const data = { ...game.withId(0), count: 0 };

export const updatePin = () => {
  // console.log('updatePin');
  return data;
};

export const getGame = () => {
  return data;
};

export const actions = {
  updatePin
};
export default data;
