import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { GameProvider } from '../../providers/game';

import ScoreBoard from '../../containers/Scoreboard';
import Lane from '../../containers/Lane';
import Footer from './Footer';

export const GameIndex = () => {
  return (
    <View style={styles.container}>
      <GameProvider>
        <ScoreBoard />
        <Lane />
        <Footer />
      </GameProvider>
    </View>
  );
};

export default GameIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
