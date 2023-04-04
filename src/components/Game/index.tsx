import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Footer from './Footer';
import Lane from './Lane';
import ScoreBoard from './Scoreboard';
import { useGameStore } from './store';
import { useGame } from '../../api';

export const Game = () => {
  const { data, isLoading } = useGame();
  const { setFrames } = useGameStore();

  useEffect(() => {
    if (!isLoading && data?.frames) {
      setFrames(data.frames);
    }
  }, [data?.frames, isLoading, setFrames]);

  return (
    <View style={styles.container}>
      <ScoreBoard />
      <Lane />
      <Footer />
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
