import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Frame from './Frame';

export const ScoreBoardIndex = ({ frames, onFramePress }) => {
  return (
    <View style={styles.container}>
      {frames.map(frame => {
        return (
          <Frame
            key={frame.id}
            frame={frame}
            onFramePress={handleOnFramePress(onFramePress)}
          />
        );
      })}
    </View>
  );
};

ScoreBoardIndex.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object),
  onFramePress: PropTypes.func
};

ScoreBoardIndex.defaultProps = {
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
