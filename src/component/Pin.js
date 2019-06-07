import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Pin extends React.PureComponent {
  static propTypes = {
    pin: PropTypes.object,
    handlePinPress: PropTypes.func
  };

  static defaultProps = {
    handlePinPress: () => {},
    pin: {}
  };

  onPress = pin => {
    const { down } = pin;
    return this.props.handlePinPress({ ...pin, down: !down });
  };

  render() {
    const { pin } = this.props;
    const { down } = pin;

    const pinDown = <View style={styles.down} />;
    const pinUp = (
      <View style={styles.outside}>
        <View style={styles.inside} />
      </View>
    );

    console.log('pin', pin.position);
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.onPress(pin)}>
        <View style={styles.container}>{down ? pinDown : pinUp}</View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  outside: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 8,
    backgroundColor: 'white'
  },
  inside: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'white'
  },
  down: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    padding: 18,
    backgroundColor: 'black'
  }
});
