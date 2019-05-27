import data from '../data';

export const newGame = (id = 0) => {
  return data.game(id);
};

export const updatePin = () => {
  // console.log('updatePin');
  return data;
};

export const actions = {
  updatePin
};
