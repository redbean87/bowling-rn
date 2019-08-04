import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Pin from '../../../component/Pin';

export default class Three extends React.PureComponent {
  static propTypes = {
    pins: PropTypes.arrayOf(PropTypes.object),
    handlePinPress: PropTypes.func
  };

  static defaultProps = {
    pins: [],
    handlePinPress: () => {}
  };

  handlePinPress = pinIndex => {
    return pin => {
      return this.props.handlePinPress(pinIndex, pin);
    };
  };

  render() {
    const { pins } = this.props;
    const [pinFour, pinFive, pinSix] = pins;
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinFour} handlePinPress={this.handlePinPress(3)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinFive} handlePinPress={this.handlePinPress(4)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinSix} handlePinPress={this.handlePinPress(5)} />
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
