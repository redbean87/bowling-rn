import { Dimensions } from 'react-native';

export const randomColorGenerator = () => {
  return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`;
};

export const pinDiameter = () => {
  return Math.round(Dimensions.get('window').width / 8);
};

export const pinRadius = () => {
  return Math.round(pinDiameter() / 2);
};
