import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

const Two = ({ pins, handlePinPress }) => {
  const [pinTwo, pinThree] = pins;
  return (
    <View style={styles.container}>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinTwo} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinThree} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column} />
    </View>
  );
};

Two.defaultProps = {
  pins: [],
  handlePinPress: () => {},
};

export default Two;

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
