import { StyleSheet, View } from 'react-native';

import { useGameStore } from '../store';
import Frame from './Frame';
import { useGame } from '../../../api';

export const ScoreBoard = () => {
  const { data } = useGame();
  const { actions, frameIndex } = useGameStore();

  const { setFrameIndex } = actions;
  const frames = data?.frames ?? [];

  return (
    <View style={styles.container}>
      {frames?.map((frame = {}, index) => {
        return (
          <Frame
            key={frame.id}
            frame={frame}
            isCurrentFrame={index === frameIndex}
            onFramePress={() => setFrameIndex(index)}
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
