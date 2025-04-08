import { StyleSheet, View } from 'react-native';

import { PinComponent as Pin } from './Pin';
import type { Pin as PinType } from '../../../models/pin';

interface RowOneProps {
  pin: PinType;
}

const One = ({ pin }: RowOneProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pin} />
      </View>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column} />
    </View>
  );
};

export default One;

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
