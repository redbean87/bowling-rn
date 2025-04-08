import { StyleSheet, View } from 'react-native';

import { PinComponent as Pin } from './Pin';
import type { Pin as PinType } from '../../../models/pin';

interface RowFourProps {
  pins: PinType[];
}

const Four = ({ pins = [] }: RowFourProps) => {
  const [pinSeven, pinEight, pinNine, pinTen] = pins;
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Pin pin={pinSeven} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinEight} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinNine} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinTen} />
      </View>
    </View>
  );
};

export default Four;

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
