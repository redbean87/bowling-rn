import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pin from './Pin';

export default class RowThree extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin />
        </View>
        <View style={styles.column} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
