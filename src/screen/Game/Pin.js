import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Pin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.outside}>
          <View style={styles.inside} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 100
  },
  outside: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 8,
    backgroundColor: 'white'
  },
  inside: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'white'
  }
});
