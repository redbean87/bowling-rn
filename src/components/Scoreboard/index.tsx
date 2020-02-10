import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Frame from './Frame';

export const ScoreBoardIndex = ({ frames, selectedFrame, onFramePress }) => {
  return (
    <View style={styles.container}>
      {frames.map(frame => {
        return (
          <Frame
            key={frame.id}
            frame={frame}
            isCurrentFrame={frame.position === selectedFrame}
            onFramePress={onFramePress}
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
  selectedFrame: 0,
  frames: [],
  onFramePress: () => {}
};

export default ScoreBoardIndex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});
