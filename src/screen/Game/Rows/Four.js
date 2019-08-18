import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Pin from '../../../component/Pin';

export default class Four extends React.PureComponent {
  static propTypes = {
    pins: PropTypes.arrayOf(PropTypes.object),
    handlePinPress: PropTypes.func
  };

  static defaultProps = {
    pins: [],
    handlePinPress: () => {}
  };

  render() {
    const { handlePinPress, pins } = this.props;
    const [pinSeven, pinEight, pinNine, pinTen] = pins;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Pin pin={pinSeven} onPinPress={handlePinPress} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinEight} onPinPress={handlePinPress} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinNine} onPinPress={handlePinPress} />
        </View>
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pinTen} onPinPress={handlePinPress} />
        </View>
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
