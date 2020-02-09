import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Frame from './Frame';

export const ScoreBoardIndex = ({ currentframe, frames, onFramePress }) => {
  return (
    <View style={styles.container}>
      {frames.map(frame => {
        return (
          <Frame
            key={frame.id}
            frame={frame}
            isCurrentFrame={frame === currentframe}
            onFramePress={handleOnFramePress(onFramePress)}
          />
        );
      })}
    </View>
  );
};

ScoreBoardIndex.propTypes = {
  currentframe: PropTypes.object,
  frames: PropTypes.arrayOf(PropTypes.object),
  onFramePress: PropTypes.func
};

ScoreBoardIndex.defaultProps = {
  currentframe: {},
  frames: [],
  onFramePress: () => {}
};

export default ScoreBoardIndex;

const handleOnFramePress = onFramePress => {
  return position => {
    onFramePress(position);
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});
