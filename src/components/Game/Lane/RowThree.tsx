import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pin from './Pin';

const Three = ({ pins, handlePinPress }) => {
  const [pinFour, pinFive, pinSix] = pins;
  return (
    <View style={styles.container}>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinFour} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinFive} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinSix} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
    </View>
  );
};

Three.defaultProps = {
  pins: [],
  handlePinPress: () => {},
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
