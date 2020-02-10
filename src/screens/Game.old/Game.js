import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Lane from './Lane';
import ScoreBoard from '../../containers/Scoreboard';

// Frames 0 - 9
const MAX_FRAME_POSITION = 9;

export const Game = ({ actions, frames }) => {
  const [selectedFrame, updateSelectedFrame] = useState(0);
  const [currentRoll, updateCurrentRoll] = useState(0);
  const frame = frames[selectedFrame];
  return (
    <View style={styles.container}>
      <ScoreBoard />
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
          updateSelectedFrame,
          frame,
          currentRoll
        )}
        onSparePress={handleSparePress(
          actions,
          updateCurrentRoll,
          updateSelectedFrame,
          frame,
          currentRoll
        )}
        onNextRollPress={handleNextRollPress(
          updateCurrentRoll,
          updateSelectedFrame,
          selectedFrame,
          currentRoll
        )}
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
    const nextFrame = selectedFrame;
    updateSelectedFrame(nextFrame);
  };
};

const handlePinPress = (actions, frame, currentRoll) => {
  return pin => {
    actions.handlePinPress(frame, currentRoll, pin);
  };
};

const handleStrikePress = (
  actions,
  updateCurrentRoll,
  updateSelectedFrame,
  frame,
  currentRoll
) => {
  return () => {
    const nextFrame = frame.position;

    actions.handleStrikePress(frame, currentRoll);
    updateCurrentRoll(1);

    if (nextFrame < MAX_FRAME_POSITION) {
      updateSelectedFrame(nextFrame);
    }
  };
};

const handleSparePress = (
  actions,
  updateCurrentRoll,
  updateSelectedFrame,
  frame,
  currentRoll
) => {
  return () => {
    const nextFrame = frame.position;

    actions.handleSparePress(frame, currentRoll);
    updateCurrentRoll(1);

    if (nextFrame < MAX_FRAME_POSITION) {
      updateSelectedFrame(nextFrame);
    }
  };
};

const handleNextRollPress = (
  updateCurrentRoll,
  updateSelectedFrame,
  frame,
  currentRoll
) => {
  return () => {
    const nextFrame = frame.position;
    if (nextFrame < MAX_FRAME_POSITION) {
      if (currentRoll === 1) {
        updateCurrentRoll(currentRoll + 1);
      } else {
        updateCurrentRoll(1);
        updateSelectedFrame(nextFrame);
      }
    }
    updateCurrentRoll(currentRoll + 1);
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
