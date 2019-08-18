import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../component/Button';

const Footer = ({
  currentRoll,
  onNextRollPress,
  onStrikePress,
  onSparePress
}) => {
  return (
    <View style={styles.container}>
      {currentRoll === 1 ? (
        <View style={styles.strike}>
          <Button onPress={onStrikePress} title={'Strike'} />
        </View>
      ) : (
        <View style={styles.strike}>
          <Button onPress={onSparePress} title={'Spare'} />
        </View>
      )}
      <View style={styles.next}>
        <Button onPress={onNextRollPress} title={'Next Roll'} />
      </View>
    </View>
  );
};

Footer.propTypes = {
  currentRoll: PropTypes.number,
  onNextRollPress: PropTypes.func.isRequired,
  onSparePress: PropTypes.func.isRequired,
  onStrikePress: PropTypes.func.isRequired,
  selectedFrame: PropTypes.number.isRequired
};

Footer.defaultProps = {
  currentRoll: 0,
  onNextRollPress: () => {},
  onSparePress: () => {},
  onStrikePress: () => {},
  selectedFrame: 1
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  strike: {
    flex: 1
  },
  game: {
    flex: 1
  },
  next: {
    flex: 1
  }
});
