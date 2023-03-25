import { StyleSheet, View } from 'react-native';

import Button from '../Common/Button';

const Footer = ({ isStrikeBall, onNextPress, onStrikePress, onSparePress }) => {
  return (
    <View style={styles.container}>
      {isStrikeBall ? (
        <View style={styles.button}>
          <Button onPress={onStrikePress} title={'Strike'} />
        </View>
      ) : (
        <View style={styles.button}>
          <Button onPress={onSparePress} title={'Spare'} />
        </View>
      )}
      <View style={styles.button}>
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
    margin: 5,
  },
});
