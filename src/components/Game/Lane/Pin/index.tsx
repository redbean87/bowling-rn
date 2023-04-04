import { StyleSheet, TouchableOpacity } from 'react-native';

import PinDown from './PinDown';
import PinUp from './PinUp';
import { pinDiameter } from '../../../../utils';
import { useGameStore } from '../../store';

export const Pin = ({ pin = {} }) => {
  const { onPinPress } = useGameStore();
  const { down } = pin;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => onPinPress(pin)}
    >
      {down ? <PinDown /> : <PinUp />}
    </TouchableOpacity>
  );
};

export default Pin;

const styles = StyleSheet.create({
  container: {
    width: pinDiameter(),
    height: pinDiameter(),
  },
});
