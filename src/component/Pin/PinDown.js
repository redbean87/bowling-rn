import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PinDown = () => {
  return <View style={styles.container} />;
};

export default PinDown;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    padding: 18,
    backgroundColor: 'black'
  }
});
