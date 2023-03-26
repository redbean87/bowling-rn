import { StyleSheet, View } from 'react-native';

import Footer from './Footer';
import Lane from './Lane';
import ScoreBoard from './Scoreboard';

export const Game = () => {
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
