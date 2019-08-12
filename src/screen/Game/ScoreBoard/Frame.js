import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import PinCount from './PinCount';

export const Frame = ({ frame }) => {
  const { counts = [], tenthFrame } = frame;

  const styles = tenthFrame ? tenthFramestyles : nonTenthFramestyles;

  return (
    <View style={styles.container}>
      <View>
        <Text>{frame.position}</Text>
      </View>
      <PinCount counts={counts} tenthFrame={tenthFrame} />
      <View>
        <Text>{frame.id}</Text>
      </View>
    </View>
  );
};

Frame.propTypes = {
  frame: PropTypes.object
};

Frame.defaultProps = {
  frame: {}
};

export default Frame;

const commonStyes = {
  alignItems: 'center',
  borderWidth: 0.5,
  borderColor: 'black'
};

const nonTenthFramestyles = StyleSheet.create({
  container: {
    ...commonStyes,
    flex: 1
  }
});

const tenthFramestyles = StyleSheet.create({
  container: {
    ...commonStyes,
    flex: 1.5
  }
});
