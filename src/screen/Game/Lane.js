import React from 'react';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import LaneC from '../../component/Lane';

import RowOne from './Row/One';
import RowTwo from './Row/Two';
import RowThree from './Row/Three';
import RowFour from './Row/Four';

export const Lane = props => {
  const { handlePinPress } = props;
  const [rowFour, rowThree, rowTwo, rowOne] = pinsByRow(props);
  return (
    <LaneC>
      <RowFour pins={rowFour} handlePinPress={handlePinPress} />
      <RowThree pins={rowThree} handlePinPress={handlePinPress} />
      <RowTwo pins={rowTwo} handlePinPress={handlePinPress} />
      <RowOne pin={rowOne} handlePinPress={handlePinPress} />
    </LaneC>
  );
};

Lane.propTypes = {
  frame: PropTypes.object,
  handlePinPress: PropTypes.func
};

Lane.defaultProps = {
  frame: {},
  handlePinPress: () => {}
};

export default Lane;

const pinsSelector = (props = {}) => {
  const { frame } = props;
  return frame.pins;
};

const pinsByRow = createSelector(
  pinsSelector,
  (pins = []) => {
    return [pins.slice(6), pins.slice(3, 6), pins.slice(1, 3), pins[0]];
  }
);
