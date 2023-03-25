import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Footer from './Footer';
import { GameProvider } from './game-context';
import Lane from './Lane';
import ScoreBoard from './Scoreboard';

export const Game = () => {
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

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
