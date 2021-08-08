import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Pin from '../Pin';

export default class Two extends React.PureComponent {
  static propTypes = {
    pins: PropTypes.arrayOf(PropTypes.object),
    handlePinPress: PropTypes.func,
  };

  static defaultProps = {
    pins: [],
    handlePinPress: () => {},
  };

  render() {
    const { handlePinPress, pins } = this.props;
    const [pinTwo, pinThree] = pins;
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinTwo} onPinPress={handlePinPress} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinThree} onPinPress={handlePinPress} />
        </View>
        <View style={styles.column} />
        <View style={styles.column} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
});
