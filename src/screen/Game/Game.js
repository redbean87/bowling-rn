import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Lane from './Lane';
import ScoreBoard from './ScoreBoard';

const MAX_FRAME_POSITION = 10;

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
        handlePinPress={handlePinPress(actions, selectedFrame, currentRoll)}
      />
      <Footer
        selectedFrame={selectedFrame}
        onPreviousFramePress={handlePreviousFramePress(
          updateSelectedFrame,
          selectedFrame - 1
        )}
        onNextFramePress={handleNextFramePress(
          updateSelectedFrame,
          selectedFrame + 1
        )}
        onStrikePress={handleStrikePress(updateCurrentRoll)}
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

const handlePreviousFramePress = (updateSelectedFrame, selectedFrame) => {
  return () => {
    if (selectedFrame < 0) {
      return;
    }
    updateSelectedFrame(selectedFrame);
  };
};

const handleNextFramePress = (updateSelectedFrame, selectedFrame) => {
  return () => {
    if (selectedFrame >= MAX_FRAME_POSITION) {
      return;
    }
    updateSelectedFrame(selectedFrame);
  };
};

const handlePinPress = (actions, frameIndex, currentRoll) => {
  return (pinIndex, pin) => {
    actions.handlePinPress(frameIndex, currentRoll, pinIndex, pin);
  };
};

const handleStrikePress = updateCurrentRoll => {
  return () => {
    updateCurrentRoll();
  };
};

const handleSparePress = updateCurrentRoll => {
  return () => {
    updateCurrentRoll();
  };
};

const handleNextRollPress = updateCurrentRoll => {
  return () => {
    updateCurrentRoll();
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
