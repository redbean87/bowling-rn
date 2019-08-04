import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../component/Button';

const Footer = ({ onPreviousFramePress, onNextFramePress, selectedFrame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.prev}>
        <Button onPress={onPreviousFramePress} title={'Prev Frame'} />
      </View>
      <View style={styles.game}>
        <Button onPress={() => {}} title={`Frame ${selectedFrame + 1}`} />
      </View>
      <View style={styles.next}>
        <Button onPress={onNextFramePress} title={'Next Frame'} />
      </View>
    </View>
  );
};

Footer.propTypes = {
  selectedFrame: PropTypes.number.isRequired,
  onPreviousFramePress: PropTypes.func.isRequired,
  onNextFramePress: PropTypes.func.isRequired
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
