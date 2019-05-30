import React from 'react';
import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

export default class RowTwo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePinPress = pinIndex => {
    return pin => {
      return this.props.handlePinPress(pinIndex, pin);
    };
  };

  render() {
    const { pins = [] } = this.props;
    console.log('RowTwo');
    const [pinTwo, pinThree] = pins;
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinTwo} handlePinPress={this.handlePinPress(1)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinThree} handlePinPress={this.handlePinPress(2)} />
        </View>
        <View style={styles.column} />
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
