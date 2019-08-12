import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export const PinCount = ({ counts, tenthFrame }) => {
  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <Text>{counts[0]}</Text>
      </View>
      <View style={styles.count}>
        <Text>{counts[1]}</Text>
      </View>
      {tenthFrame && (
        <View style={styles.count}>
          <Text>{counts[2]}</Text>
        </View>
      )}
    </View>
  );
};

PinCount.propTypes = {
  counts: PropTypes.array,
  tenthFrame: PropTypes.bool
};

PinCount.defaultProps = {
  counts: [],
  tenthFrame: false
};

export default PinCount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  count: {
    flex: 1,
    alignItems: 'center'
  }
});
