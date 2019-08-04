import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import PinDown from './PinDown';
import PinUp from './PinUp';

export const Pin = props => {
  const { handlePinPress, pin } = props;
  const { down } = pin;
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onPinPress(handlePinPress, pin)}
    >
      <View style={styles.container}>{down ? <PinDown /> : <PinUp />}</View>
    </TouchableOpacity>
  );
};

Pin.propTypes = {
  pin: PropTypes.object,
  handlePinPress: PropTypes.func
};

Pin.defaultProps = {
  handlePinPress: () => {},
  pin: {}
};

export default Pin;

const onPinPress = (handlePinPress, pin) => {
  const { down } = pin;
  return handlePinPress({ ...pin, down: !down });
};

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
