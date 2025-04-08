import { StyleSheet, TouchableOpacity } from 'react-native';

import PinDown from './PinDown';
import PinUp from './PinUp';
import { pinDiameter } from '../../../../utils';
import { useGameStore } from '../../../../store/game';
import type { Pin as PinType } from '../../../../models/pin';

interface PinProps {
  pin: PinType;
}

export const PinComponent = ({ pin }: PinProps) => {
  const { onPinPress } = useGameStore();
  const { isDown, position } = pin;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => onPinPress({ position, isDown })}
    >
      {isDown ? <PinDown /> : <PinUp />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: pinDiameter(),
    height: pinDiameter(),
  },
});
