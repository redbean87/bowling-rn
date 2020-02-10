import React, { useState } from 'react';
import { View } from 'react-native';

import ScoreBoard from '../../containers/Scoreboard';
import Footer from './Footer';

export const GameIndex = () => {
  return (
    <View>
      <ScoreBoard />
      <Footer />
    </View>
  );
};

export default GameIndex;
