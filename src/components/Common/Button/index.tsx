import { Button } from 'react-native';

export const ButtonIndex = ({
  onPress = () => {},
  title = '',
  color = undefined,
  accessibilityLabel = undefined,
}) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      color={color}
      accessibilityLabel={accessibilityLabel}
    />
  );
};

export default ButtonIndex;
