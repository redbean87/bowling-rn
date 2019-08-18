import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Pin from '../../../component/Pin';

export default class One extends React.PureComponent {
  static propTypes = {
    pin: PropTypes.object,
    handlePinPress: PropTypes.func
  };

  static defaultProps = {
    pin: {},
    handlePinPress: () => {}
  };

  render() {
    const { handlePinPress, pin } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column} />
        <View style={styles.column}>
          <Pin pin={pin} onPinPress={handlePinPress} />
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
