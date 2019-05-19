import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createSelector } from 'reselect';

import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';

export default class Lane extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pinsSelector = (props = {}) => {
    const { frame = {} } = props;
    return frame.pins;
  };

  pinsByRow = createSelector(
    this.pinsSelector,
    (pins = []) => {
      return [pins.slice(6), pins.slice(3, 6), pins.slice(1, 3), pins[0]];
    }
  );

  render() {
    const [rowFour, rowThree, rowTwo, rowOne] = this.pinsByRow(this.props);
    // console.log('Lane');
    return (
      <View style={styles.container}>
        <RowFour pins={rowFour} />
        <RowThree pins={rowThree} />
        <RowTwo pins={rowTwo} />
        <RowOne pin={rowOne} />
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
