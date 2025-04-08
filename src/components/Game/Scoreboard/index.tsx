import { StyleSheet, View } from 'react-native';

import { Frame } from './Frame';
import { useGameStore } from '../../../store/game';
import type { Frame as FrameType } from '../../../models/frame';

export const ScoreBoard = () => {
  const { frames, frameIndex, setFrameIndex } = useGameStore();

  return (
    <View style={styles.container}>
      {frames?.map((frame: FrameType, index: number) => {
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

export default ScoreBoard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
