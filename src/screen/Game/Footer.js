import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../component/Button';

const Footer = ({
  onNextFramePress,
  onNextRollPress,
  onPreviousFramePress,
  onStrikePress,
  onSparePress,
  selectedFrame
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.prev}>
        <Button onPress={onStrikePress} title={'Strike'} />
      </View>
      <View style={styles.prev}>
        <Button onPress={onPreviousFramePress} title={'Prev Frame'} />
      </View>
      <View style={styles.game}>
        <Button onPress={() => {}} title={`Frame ${selectedFrame + 1}`} />
      </View>
      <View style={styles.next}>
        <Button onPress={onNextFramePress} title={'Next Frame'} />
      </View>
      <View style={styles.next}>
        <Button onPress={onNextRollPress} title={'Next Roll'} />
      </View>
    </View>
  );
};

Footer.propTypes = {
  onNextFramePress: PropTypes.func.isRequired,
  onNextRollPress: PropTypes.func.isRequired,
  onPreviousFramePress: PropTypes.func.isRequired,
  onSparePress: PropTypes.func.isRequired,
  onStrikePress: PropTypes.func.isRequired,
  selectedFrame: PropTypes.number.isRequired
};

Footer.defaultProps = {
  onNextFramePress: () => {},
  onNextRollPress: () => {},
  onPreviousFramePress: () => {},
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
  prev: {
    flex: 1
  },
  game: {
    flex: 1
  },
  next: {
    flex: 1
  }
});
