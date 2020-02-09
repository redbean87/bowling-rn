import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import PinDown from './PinDown';
import PinUp from './PinUp';

export const Pin = props => {
  const { onPinPress, pin } = props;
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

Pin.propTypes = {
  pin: PropTypes.object,
  onPinPress: PropTypes.func
};

Pin.defaultProps = {
  onPinPress: () => {},
  pin: {}
};

export default Pin;

const styles = StyleSheet.create({
  container: {}
});
