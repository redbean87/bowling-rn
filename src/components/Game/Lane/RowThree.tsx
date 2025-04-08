import { StyleSheet, View } from 'react-native';

import { PinComponent as Pin } from './Pin';
import type { Pin as PinType } from '../../../models/pin';

interface RowThreeProps {
  pins: PinType[];
}

const Three = ({ pins = [] }: RowThreeProps) => {
  const [pinFour, pinFive, pinSix] = pins;
  return (
    <View style={styles.container}>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinFour} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinFive} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinSix} />
      </View>
      <View style={styles.column} />
    </View>
  );
};

export default Three;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
