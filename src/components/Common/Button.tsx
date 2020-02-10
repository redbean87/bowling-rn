import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

export const ButtonIndex = ({ onPress, title, color, accessibilityLabel }) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      color={color}
      accessibilityLabel={accessibilityLabel}
    />
  );
};

ButtonIndex.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  accessibilityLabel: PropTypes.string
};

ButtonIndex.defaultProps = {
  onPress: () => {},
  title: ''
};

export default ButtonIndex;
