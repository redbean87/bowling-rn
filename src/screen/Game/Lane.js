import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';

export default class Lane extends React.PureComponent {
  static propTypes = {
    frame: PropTypes.object,
    handlePinPress: PropTypes.func
  };

  static defaultProps = {
    frame: {},
    handlePinPress: () => {}
  };

  pinsSelector = (props = {}) => {
    const { frame } = props;
    return frame.pins;
  };

  pinsByRow = createSelector(
    this.pinsSelector,
    (pins = []) => {
      return [pins.slice(6), pins.slice(3, 6), pins.slice(1, 3), pins[0]];
    }
  );

  render() {
    const { handlePinPress } = this.props;
    const [rowFour, rowThree, rowTwo, rowOne] = this.pinsByRow(this.props);
    console.log('Lane');
    return (
      <View style={styles.container}>
        <RowFour pins={rowFour} handlePinPress={handlePinPress} />
        <RowThree pins={rowThree} handlePinPress={handlePinPress} />
        <RowTwo pins={rowTwo} handlePinPress={handlePinPress} />
        <RowOne pin={rowOne} handlePinPress={handlePinPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'tan'
  }
});
