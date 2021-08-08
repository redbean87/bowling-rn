import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

import Game from './src/components/Game';

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Game />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
