import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

const One = ({ pin = {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pin} />
      </View>
      <View style={styles.column} />
      <View style={styles.column} />
      <View style={styles.column} />
    </View>
  );
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
