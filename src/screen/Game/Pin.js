import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Pin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pin = {} } = this.props;
    const { down } = pin;

    const pinDown = <View style={styles.down} />;
    const pinUp = (
      <View style={styles.outside}>
        <View style={styles.inside} />
      </View>
    );

    // console.log('pin', pin.position, pin);
    return <View style={styles.container}>{down ? pinDown : pinUp}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
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
  },
  down: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'black'
  }
});
