import * as frame from './frame';

export const data = (id = 0) => ({
  id,
  frames: [
    frame.withId(id, 0),
    frame.withId(id, 1),
    frame.withId(id, 2),
    frame.withId(id, 3),
    frame.withId(id, 4),
    frame.withId(id, 5),
    frame.withId(id, 6),
    frame.withId(id, 7),
    frame.withId(id, 8),
    frame.withId(id, 9)
  ]
});

export const withId = id => {
  return data(id);
};

export default data;
