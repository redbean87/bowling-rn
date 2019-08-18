import React, { Fragment } from 'react';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';

export const Rows = props => {
  const { handlePinPress } = props;
  const [rowFour, rowThree, rowTwo, rowOne] = pinsByRow(props);

  return (
    <Fragment>
      <Four pins={rowFour} handlePinPress={handlePinPress} />
      <Three pins={rowThree} handlePinPress={handlePinPress} />
      <Two pins={rowTwo} handlePinPress={handlePinPress} />
      <One pin={rowOne} handlePinPress={handlePinPress} />
    </Fragment>
  );
};

Rows.propTypes = {
  frame: PropTypes.object,
  handlePinPress: PropTypes.func
};

Rows.defaultProps = {
  frame: {},
  handlePinPress: () => {}
};

export default Rows;

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
