import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import PinCount from './PinCount';

export const Frame = ({ frame, onFramePress }) => {
  const { display = [], id, position, tenthFrame } = frame;

  const styles = tenthFrame ? tenthFramestyles : nonTenthFramestyles;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => onFramePress(position)}
    >
      <View style={styles.frame}>
        <Text>{position}</Text>
      </View>
      <PinCount display={display} tenthFrame={tenthFrame} />
      <View>
        <Text>{id}</Text>
      </View>
    </TouchableOpacity>
  );
};

Frame.propTypes = {
  frame: PropTypes.object,
  onFramePress: PropTypes.func
};

Frame.defaultProps = {
  frame: {},
  onFramePress: () => {}
};

export default Frame;

const commonStyes = {
  alignItems: 'center',
  borderWidth: 0.5,
  borderColor: 'black'
};

const nonTenthFramestyles = StyleSheet.create({
  container: {
    ...commonStyes,
    flex: 1
  },
  frame: {}
});

const tenthFramestyles = StyleSheet.create({
  container: {
    ...commonStyes,
    flex: 1.5
  },
  frame: {}
});
