import { StyleSheet, View } from 'react-native';

import Button from '../Common/Button';
import { useGameStore } from './store';

const Footer = () => {
  const { actions, isStrikeBall } = useGameStore();

  const { onStrikePress, onSparePress, onNextPress } = actions;

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

Footer.defaultProps = {};

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
