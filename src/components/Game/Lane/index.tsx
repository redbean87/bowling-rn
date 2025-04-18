import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { createSelector } from 'reselect';

import RowFour from './RowFour';
import RowOne from './RowOne';
import RowThree from './RowThree';
import RowTwo from './RowTwo';
import { useGameStore } from '../../../store/game';

const Lane = () => {
  const { frames, frameIndex } = useGameStore();

  const frame = useMemo(() => {
    if (frameIndex !== undefined) {
      return frames[frameIndex];
    }
  }, [frames, frameIndex]);

  if (!frame) {
    return null;
  }

  const [rowFour, rowThree, rowTwo, rowOne] = pinsByRow(frame);

  return (
    <View style={styles.container}>
      <RowFour pins={rowFour} />
      <RowThree pins={rowThree} />
      <RowTwo pins={rowTwo} />
      <RowOne pin={rowOne} />
    </View>
  );
};

export default Lane;

const pinsSelector = (frame) => frame.pins;

const pinsByRow = createSelector(pinsSelector, (pins = []) => {
  return [pins.slice(6), pins.slice(3, 6), pins.slice(1, 3), pins[0]];
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'tan',
  },
});
