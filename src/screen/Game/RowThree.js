import React from 'react';
import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

export default class RowThree extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pins = [] } = this.props;
    // console.log('RowThree');
    const [pinFour, pinFive, pinSix] = pins;
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinFour} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinFive} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinSix} />
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
