import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import PinCount from './PinCount';
import type { Frame as FrameType } from '../../../models/frame';

interface FrameProps {
  frame: FrameType;
  isCurrentFrame: boolean;
  onFramePress: (position: number) => void;
}

interface FrameStyles {
  container: ViewStyle;
  frame: ViewStyle;
}

export const Frame = ({ frame, isCurrentFrame, onFramePress }: FrameProps) => {
  const { id, position, pins, score, isStrike, isSpare } = frame;
  const tenthFrame = position === 10;

  const display: number[] = [
    pins.filter(pin => pin.isDown && pin.rollNumber === 1).length,
    pins.filter(pin => pin.isDown && pin.rollNumber === 2).length,
    pins.filter(pin => pin.isDown && pin.rollNumber === 3).length,
  ];

  const styles = getStyles(tenthFrame, isCurrentFrame);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => onFramePress(position)}
    >
      <View style={styles.frame}>
        <Text>{position}</Text>
      </View>
      <PinCount display={display} tenthFrame={tenthFrame} />
      <View>
        <Text>{score || 0}</Text>
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (tenthFrame: boolean, isCurrentFrame: boolean): FrameStyles => {
  if (tenthFrame) {
    if (isCurrentFrame) {
      return tenthCurrentFrameStyles;
    }
    return tenthFramestyles;
  }

  if (isCurrentFrame) {
    return nonTenthCurrentFrameStyles;
  }
  return nonTenthFrameStyles;
};

const commonStyes: ViewStyle = {
  alignItems: 'center' as const,
  borderWidth: 0.5,
};

const nonTenthFrameStyles = StyleSheet.create<FrameStyles>({
  container: {
    ...commonStyes,
    flex: 1,
  },
  frame: {},
});

const tenthFramestyles = StyleSheet.create<FrameStyles>({
  container: {
    ...commonStyes,
    flex: 1.5,
  },
  frame: {},
});

const currentFrameCommonStyles: ViewStyle = {
  backgroundColor: 'grey',
};

const nonTenthCurrentFrameStyles = StyleSheet.create<FrameStyles>({
  container: {
    ...commonStyes,
    ...currentFrameCommonStyles,
    flex: 1,
  },
  frame: {},
});

const tenthCurrentFrameStyles = StyleSheet.create<FrameStyles>({
  container: {
    ...commonStyes,
    ...currentFrameCommonStyles,
    flex: 1.5,
  },
  frame: {},
});
