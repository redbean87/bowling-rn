import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

const Three = ({ pins = [] }) => {
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
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
});
