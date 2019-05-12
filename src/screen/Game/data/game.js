import * as frame from './frame';

export const data = {
  id: 0,
  frames: [
    frame.withId(0)
    // frame.withId(1),
    // frame.withId(2),
    // frame.withId(3),
    // frame.withId(4),
    // frame.withId(5),
    // frame.withId(6),
    // frame.withId(7),
    // frame.withId(8),
    // frame.withId(9)
  ]
};

export const withId = id => {
  return {
    ...data,
    id
  };
};

export default data;
