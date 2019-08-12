import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import PinCount from './PinCount';

export const Frame = ({ frame }) => {
  const tenthFrame = frame.position === 10;
  const styles = tenthFrame ? tenthFramestyles : nonTenthFramestyles;
  const counts = [5, 4, 1];
  return (
    <View style={styles.container}>
      <View>
        <Text>{frame.id}</Text>
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

const nonTenthFramestyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

const tenthFramestyles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center'
  }
});
