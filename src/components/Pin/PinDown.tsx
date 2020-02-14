import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PinDown = () => {
  return <View style={styles.container} />;
};

export default PinDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: '50%',
    borderWidth: 1,
    paddingTop: '100%',
    width: '100%'
  }
});
