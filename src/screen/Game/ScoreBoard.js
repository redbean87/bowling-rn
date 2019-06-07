import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ScoreBoard extends React.PureComponent {
  render() {
    console.log('ScoreBoard');
    return (
      <View style={styles.container}>
        <Text>ScoreBoard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
