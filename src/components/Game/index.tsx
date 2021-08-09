import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import useGame from '../../api';
import { GameProvider } from '../../providers/game';
import Lane from '../Lane';
import ScoreBoard from '../Scoreboard';
import Footer from './Footer';

const MAX_FRAME_INDEX = 9;

const maxFrameCheck = (selectedFrameIndex) =>
  selectedFrameIndex >= MAX_FRAME_INDEX;

export const GameIndex = () => {
  const { data } = useGame();

  const [selectedFrameIndex, setSelectedFrameIndex] = useState(0);
  const [isStrikeBall, setIsStrikeBall] = useState(true);

  const onFrameSelected = (index) => {
    setSelectedFrameIndex(index);
    setIsStrikeBall(true);
  };
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
  const onNextRollPress = () => {
    setIsStrikeBall(false);
  };

  return (
    <View style={styles.container}>
      <GameProvider>
        <ScoreBoard
          selectedFrameIndex={selectedFrameIndex}
          setSelectedFrameIndex={onFrameSelected}
        />
        <Lane frame={data?.frames[selectedFrameIndex]} />
        <Footer
          isStrikeBall={isStrikeBall}
          onStrikePress={onStrikePress}
          onSparePress={onSparePress}
          onNextRollPress={onNextRollPress}
        />
      </GameProvider>
    </View>
  );
};

export default GameIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
