import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Footer from './Footer';
import { GameProvider } from './game-context';
import Lane from './Lane';
import ScoreBoard from './Scoreboard';

const MAX_FRAME_INDEX = 9;

const maxFrameCheck = (selectedFrameIndex: number) =>
  selectedFrameIndex >= MAX_FRAME_INDEX;

export const Game = () => {
  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);
  const [isStrikeBall, setIsStrikeBall] = useState(true);

  const onStrikePress = () => {
    if (maxFrameCheck(selectedFrameIndex)) {
      return;
    }
    setSelectedFrameIndex(selectedFrameIndex + 1);
    setIsStrikeBall(true);
  };
  const onSparePress = () => {
    if (maxFrameCheck(selectedFrameIndex)) {
      return;
    }
    setSelectedFrameIndex(selectedFrameIndex + 1);
    setIsStrikeBall(true);
  };
  const onNextPress = () => {
    setIsStrikeBall(false);
  };

  return (
    <View style={styles.container}>
      <GameProvider>
        <ScoreBoard />
        <Lane />
        <Footer
          isStrikeBall={isStrikeBall}
          onStrikePress={onStrikePress}
          onSparePress={onSparePress}
          onNextonNextPressRollPress={onNextPress}
        />
      </GameProvider>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
