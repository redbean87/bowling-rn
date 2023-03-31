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

ButtonIndex.defaultProps = {
  onPress: () => {},
  title: '',
};

export default ButtonIndex;
