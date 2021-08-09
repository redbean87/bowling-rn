import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PinDown from './PinDown';
import PinUp from './PinUp';

export const Pin = ({ onPinPress, pin }) => {
  const { down } = pin;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => onPinPress(pin)}
    >
      {down ? <PinDown /> : <PinUp />}
    </TouchableOpacity>
  );
};

Pin.defaultProps = {
  onPinPress: () => {},
  pin: {},
};

export default Pin;

const styles = StyleSheet.create({
  container: {},
});
