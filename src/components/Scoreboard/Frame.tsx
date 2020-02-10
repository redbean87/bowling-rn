import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import PinCount from './PinCount';

export const Frame = ({ frame, isCurrentFrame, onFramePress }) => {
  const { id, position, pins } = frame;
  const tenthFrame = position == 10;
  const display = [pinsDown(pins, 1), pinsDown(pins, 2), pinsDown(pins, 3)];

  const styles = getStyles(tenthFrame, isCurrentFrame);

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
  isCurrentFrame: PropTypes.bool,
  onFramePress: PropTypes.func
};

Frame.defaultProps = {
  frame: {},
  isCurrentFrame: false,
  onFramePress: () => {}
};

export default Frame;

const pinsDown = (pins = [], position = 0) => {
  return pins.filter(pin => pin.down === position).length;
};

const getStyles = (tenthFrame, isCurrentFrame) => {
  if (tenthFrame) {
    if (isCurrentFrame) {
      return tenthCurrentFrameStyles;
    }
    return tenthFramestyles;
  }

  if (isCurrentFrame) {
    return nonTenthCurrentFrameStyles;
  }
  return nonTenthFramestyles;
};

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

const currentFrameCommonStyles = {
  backgroundColor: 'grey'
};

const nonTenthCurrentFrameStyles = StyleSheet.create({
  container: {
    ...commonStyes,
    ...currentFrameCommonStyles,
    flex: 1
  }
});

const tenthCurrentFrameStyles = StyleSheet.create({
  container: {
    ...commonStyes,
    ...currentFrameCommonStyles,
    flex: 1.5
  }
});
