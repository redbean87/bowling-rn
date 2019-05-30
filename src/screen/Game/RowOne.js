import React from 'react';
import { StyleSheet, View } from 'react-native';

import Pin from './Pin';

export default class RowOne extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePinPress = pinIndex => {
    return pin => {
      return this.props.handlePinPress(pinIndex, pin);
    };
  };

  render() {
    const { pin = {} } = this.props;
    console.log('RowOne');
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pin} handlePinPress={this.handlePinPress(0)} />
        </View>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column} />
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
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
