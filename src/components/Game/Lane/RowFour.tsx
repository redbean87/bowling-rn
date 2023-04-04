import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

const Four = ({ pins = [] }) => {
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
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
});
