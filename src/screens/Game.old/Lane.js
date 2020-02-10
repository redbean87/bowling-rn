import React from 'react';
import PropTypes from 'prop-types';

import LaneComponent from '../../components/Game/Lane';

import Rows from './Rows';

export const Lane = props => {
  const { frame, handlePinPress } = props;

  return (
    <LaneComponent>
      <Rows frame={frame} handlePinPress={handlePinPress} />
    </LaneComponent>
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
