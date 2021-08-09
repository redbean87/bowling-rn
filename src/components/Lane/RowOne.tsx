import React from 'react';
import { StyleSheet, View } from 'react-native';
import Pin from '../Pin';

const One = (pin, handlePinPress) => {
  return (
    <View style={styles.container}>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pin} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column} />
    </View>
  );
};

One.defaultProps = {
  pin: {},
  handlePinPress: () => {},
};

export default One;

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
