import * as pin from './pin';

const data = (gameId, id = 0) => ({
  id,
  gameId,
  position: id + 1,
  pins: [
    pin.withId(id, 0),
    pin.withId(id, 1),
    pin.withId(id, 2),
    pin.withId(id, 3),
    pin.withId(id, 4),
    pin.withId(id, 5),
    pin.withId(id, 6),
    pin.withId(id, 7),
    pin.withId(id, 8),
    pin.withId(id, 9)
  ]
});

export const withId = (gameId, id) => {
  return data(gameId, id);
};

export default data;
