import { StyleSheet, View } from 'react-native';

import Button from '../Common/Button';
import { useContext, useState } from 'react';
import { GameContext } from './game-context';

const MAX_FRAME_INDEX = 9;

const maxFrameCheck = (selectedFrameIndex: number) =>
  selectedFrameIndex >= MAX_FRAME_INDEX;

const Footer = () => {
  const { actions, selectedFrameIndex } = useContext(GameContext);
  const { setSelectedFrameIndex } = actions;
  const [isStrikeBall, setIsStrikeBall] = useState(true);

  const onStrikePress = () => {
    if (maxFrameCheck(selectedFrameIndex)) {
      return;
    }
    setSelectedFrameIndex(selectedFrameIndex + 1);
    setIsStrikeBall(true);
  };
  const onSparePress = () => {
    if (maxFrameCheck(selectedFrameIndex)) {
      return;
    }
    setSelectedFrameIndex(selectedFrameIndex + 1);
    setIsStrikeBall(true);
  };

  const onNextPress = () => {
    setIsStrikeBall(false);
  };

  return (
    <View style={styles.container}>
      {isStrikeBall ? (
        <View style={[styles.button, styles.leftButton]}>
          <Button onPress={onStrikePress} title={'Strike'} />
        </View>
      ) : (
        <View style={[styles.button, styles.leftButton]}>
          <Button onPress={onSparePress} title={'Spare'} />
        </View>
      )}
      <View style={[styles.button, styles.rightButton]}>
        <Button onPress={onNextPress} title={'Next'} />
      </View>
    </View>
  );
};

Footer.defaultProps = {
  isStrikeBall: true,
  onNextRollPress: () => {},
  onSparePress: () => {},
  onStrikePress: () => {},
  selectedFrame: 1,
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginTop: 4,
    marginBottom: 4,
  },
  leftButton: {
    marginLeft: 4,
    marginRight: 2,
  },
  rightButton: {
    marginLeft: 2,
    marginRight: 4,
  },
});
