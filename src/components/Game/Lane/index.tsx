import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import RowFour from './RowFour';
import RowThree from './RowThree';
import RowTwo from './RowTwo';
import RowOne from './RowOne';

const Lane = props => {
  const [rowFour, rowThree, rowTwo, rowOne] = pinsByRow(props);
  return (
    <View style={styles.container}>
      <RowFour pins={rowFour} />
      <RowThree pins={rowThree} />
      <RowTwo pins={rowTwo} />
      <RowOne pin={rowOne} />
    </View>
  );
};

Lane.propTypes = {
  children: PropTypes.object
};

export default Lane;

const pinsSelector = (props = {}) => {
  const { frame } = props;
  return frame.pins;
};

const pinsByRow = createSelector(pinsSelector, (pins = []) => {
  return [pins.slice(6), pins.slice(3, 6), pins.slice(1, 3), pins[0]];
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'tan'
  }
});
