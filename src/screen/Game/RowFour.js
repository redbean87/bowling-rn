import React from 'react';
import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

export default class RowFour extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pins = [] } = this.props;
    // console.log('RowFour');
    const [pinSeven, pinEight, pinNine, pinTen] = pins;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Pin pin={pinSeven} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinEight} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinNine} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinTen} />
        </View>
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
