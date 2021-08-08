import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { circleBorderRadius } from '../../utils';

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
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: circleBorderRadius(),
    borderWidth: 1,
    width: '100%',
  },
  head: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: circleBorderRadius(),
    borderWidth: 1,
    paddingTop: '60%',
    width: '60%',
    marginLeft: '20%',
    marginBottom: '20%',
    marginTop: '20%',
  },
});
