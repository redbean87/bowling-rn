import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Frame from './Frame';

export const ScoreBoardIndex = ({ frames }) => {
  return (
    <View style={styles.container}>
      {frames.map(frame => {
        return <Frame key={frame.id} frame={frame} />;
      })}
    </View>
  );
};

ScoreBoardIndex.propTypes = {
  frames: PropTypes.arrayOf(PropTypes.object)
};

ScoreBoardIndex.defaultProps = {
  frames: []
};

export default ScoreBoardIndex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
});
