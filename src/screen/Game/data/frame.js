import * as pin from './pin';

const data = {
  id: 0,
  position: 0,
  pins: [
    pin.withId(0),
    pin.withId(1),
    pin.withId(2),
    pin.withId(3),
    pin.withId(4),
    pin.withId(5),
    pin.withId(6),
    pin.withId(7),
    pin.withId(8),
    pin.withId(9)
  ]
};

export const withId = id => {
  return {
    ...data,
    id,
    position: id + 1
  };
};

export default data;
