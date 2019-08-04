import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PinUp = () => {
  return (
    <View style={styles.body}>
      <View style={styles.head} />
    </View>
  );
};

export default PinUp;

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 8,
    backgroundColor: 'white'
  },
  head: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'white'
  }
});
