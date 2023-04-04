import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { useGameStore } from './store';
import Button from '../Common/Button';

const Footer = () => {
  const { rollIndex, isStrikeBall, onStrikePress, onSparePress, onNextPress } =
    useGameStore();

  const showStrikeButton = useMemo(() => {
    if (rollIndex !== undefined) {
      return isStrikeBall();
    }
  }, [isStrikeBall, rollIndex]);

  return (
    <View style={styles.container}>
      {showStrikeButton ? (
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
