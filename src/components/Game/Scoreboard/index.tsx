import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Frame from './Frame';

import { useGame } from '../../../providers/game';

export const ScoreBoard = () => {
  const { frames, selectedFrame, onFramePress } = useGame();
  return (
    <View style={styles.container}>
      {frames.map((frame) => {
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

ScoreBoard.propTypes = {
  currentframe: PropTypes.object,
  frames: PropTypes.arrayOf(PropTypes.object),
  onFramePress: PropTypes.func,
};

ScoreBoard.defaultProps = {
  selectedFrame: 0,
  frames: [],
  onFramePress: () => {},
};

export default ScoreBoard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
