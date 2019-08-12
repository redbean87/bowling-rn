import produce from 'immer';

export const mergeObjects = (oldObject, newObject) => {
  return { ...oldObject, ...newObject };
};

export const withMeta = gameData => {
  return produce(gameData, draft => {
    draft.frames = draft.frames.map(withFrameMeta);
  });
};

const withFrameMeta = (frame, index, frames) => {
  return produce(frame, draft => {
    const { pins = [] } = draft;
    draft.counts = [pinCount(pins, 0), pinCount(pins, 1), pinCount(pins, 2)];
    draft.tenthFrame = draft.position === 10;
  });
};

const pinCount = (pins, downPosition) => {
  return pins.filter(pin => pin.downPosition === downPosition).length;
};
