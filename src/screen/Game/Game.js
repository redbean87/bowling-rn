import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Lane from './Lane';
import ScoreBoard from './ScoreBoard';

export const Game = ({ actions, frames }) => {
  const [selectedFrame, updateSelectedFrame] = useState(0);
  const [currentRoll, updateCurrentRoll] = useState(1);
  const frame = frames[selectedFrame];
  return (
    <View style={styles.container}>
      <ScoreBoard
        frames={frames}
        onFramePress={handleFramePress(updateSelectedFrame)}
      />
      <Lane
        frame={frame}
        handlePinPress={handlePinPress(actions, frame, currentRoll)}
      />
      <Footer
        currentRoll={currentRoll}
        selectedFrame={selectedFrame}
        onStrikePress={handleStrikePress(
          actions,
          updateCurrentRoll,
          frame,
          currentRoll
        )}
        onSparePress={handleSparePress(updateCurrentRoll)}
        onNextRollPress={handleNextRollPress(updateCurrentRoll)}
      />
    </View>
  );
};

Game.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object
};

Game.defaultProps = {
  frames: [],
  actions: {}
};

export default Game;

const handleFramePress = updateSelectedFrame => {
  return selectedFrame => {
    const nextFrame = selectedFrame - 1;
    if (nextFrame < 0) {
      return;
    }
    updateSelectedFrame(nextFrame);
  };
};

const handlePinPress = (actions, frame, currentRoll) => {
  return pin => {
    actions.handlePinPress(frame, currentRoll, pin);
  };
};

const handleStrikePress = (actions, updateCurrentRoll, frame, currentRoll) => {
  return () => {
    actions.handleStrikePress(frame, currentRoll);
    // updateCurrentRoll(1);
  };
};

const handleSparePress = updateCurrentRoll => {
  return () => {
    updateCurrentRoll(1);
  };
};

const handleNextRollPress = updateCurrentRoll => {
  return () => {
    updateCurrentRoll(2);
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
