import { StyleSheet, View } from 'react-native';

import Frame from './Frame';
import { useGame } from '../../../api';
import { useGameStore } from '../store';

export const ScoreBoard = () => {
  const { data } = useGame();
  const { frameIndex, setFrameIndex } = useGameStore();

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
