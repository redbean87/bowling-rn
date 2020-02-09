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
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: '50%',
    borderWidth: 1,
    width: '100%'
  },
  head: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: '50%',
    borderWidth: 1,
    paddingTop: '60%',
    width: '60%',
    marginLeft: '20%',
    marginBottom: '20%',
    marginTop: '20%'
  }
});
