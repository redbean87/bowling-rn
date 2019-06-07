import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Pin from '../../component/Pin';

export default class RowFour extends React.PureComponent {
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
    const [pinSeven, pinEight, pinNine, pinTen] = pins;
    console.log('RowFour');
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Pin pin={pinSeven} handlePinPress={this.handlePinPress(6)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinEight} handlePinPress={this.handlePinPress(7)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinNine} handlePinPress={this.handlePinPress(8)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinTen} handlePinPress={this.handlePinPress(9)} />
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
