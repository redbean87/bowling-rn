import { Dimensions } from 'react-native';

export const randomColorGenerator = () => {
  return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;
};

export const circleBorderRadius = () => {
  return (
    Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height
    ) / 2
  );
};
