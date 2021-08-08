import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../Common/Button';

import { randomColorGenerator } from '../../utils';

const Home = () => {
  const [buttonColor, setButtonColor] = useState('#841584');

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        color={buttonColor}
        onPress={() => setButtonColor(randomColorGenerator())}
        title={buttonColor}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
