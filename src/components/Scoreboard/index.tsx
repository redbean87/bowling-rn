import React from 'react';
import { StyleSheet, View } from 'react-native';
import useGame from '../../api';
import Frame from './Frame';

export const ScoreBoard = ({ selectedFrameIndex, setSelectedFrameIndex }) => {
  const { data = {} } = useGame();
  const { frames = [] } = data;
  return (
    <View style={styles.container}>
      {frames.map((frame = {}, index) => {
        return (
          <Frame
            key={frame.id}
            frame={frame}
            isCurrentFrame={index === selectedFrameIndex}
            onFramePress={() => setSelectedFrameIndex(index)}
          />
        );
      })}
    </View>
  );
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
