import produce from 'immer';

export const mergeObjects = (oldObject, newObject) => {
  return { ...oldObject, ...newObject };
};

export const withMeta = gameData => {
  return produce(gameData, draft => {
    draft.frames = draft.frames.map(withFrameMeta);
  });
};

const withFrameMeta = frame => {
  return produce(frame, draft => {
    const { pins = [] } = draft;
    const tenthFrame = draft.position === 10;
    const counts = [pinCount(pins, 1), pinCount(pins, 2), pinCount(pins, 3)];
    const display = pinDisplay(counts, tenthFrame);
    draft.tenthFrame = tenthFrame;
    draft.display = display;
  });
};

// return array of counts in one sweep of pins.
const pinCount = (pins, down) => {
  return pins.filter(pin => pin.down === down).length;
};

const pinDisplay = (counts, tenthFrame) => {
  if (tenthFrame) {
    return pinDisplayTenthFrame(counts);
  }

  const [one, two] = counts;

  const strike = one === 10;
  if (strike) {
    return ['', 'X'];
  }

  const spare = one + two === 10;
  if (spare) {
    return [one, '/'];
  }

  return [one || '-', two || '-'];
};

const pinDisplayTenthFrame = counts => {
  const [one, two, three] = counts;

  const strike = one === 10;
  if (strike) {
    return ['X'].concat(pinDisplayTenthFrame([two, three]));
  }

  const spare = one + two === 10;
  if (spare) {
    return [one, '/'].concat(pinDisplayTenthFrame([three]));
  }

  return [one || '-', two || '-', '-'];
};
