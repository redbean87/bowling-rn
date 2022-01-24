import frame from "./frame";

export const data = (id = 0) => ({
  id,
  frames: [
    frame(id, 0),
    frame(id, 1),
    frame(id, 2),
    frame(id, 3),
    frame(id, 4),
    frame(id, 5),
    frame(id, 6),
    frame(id, 7),
    frame(id, 8),
    frame(id, 9),
  ],
});

export default data;
