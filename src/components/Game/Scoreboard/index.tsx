import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameContext } from '../game-context';
import Frame from './Frame';

export const ScoreBoard = () => {
  const { actions, frames, selectedFrameIndex } = useContext(GameContext);
  const { setSelectedFrameIndex } = actions;

  return (
    <View style={styles.container}>
      {frames?.map((frame = {}, index) => {
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

ScoreBoard.defaultProps = {};

export default ScoreBoard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
