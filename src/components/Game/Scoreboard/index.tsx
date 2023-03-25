import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameContext } from '../game-context';
import Frame from './Frame';

export const ScoreBoard = () => {
  const { actions, data } = useContext(GameContext);

  const { setFrameIndex } = actions;
  const { frames, frameIndex } = data;

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
