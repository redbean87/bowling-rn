import React from 'react';
import { StyleSheet, View } from 'react-native';

import Lane from './Lane';

export default class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFrame: 0
    };
  }

  render() {
    const { frames = [] } = this.props;
    const { selectedFrame } = this.state;
    const frame = frames[selectedFrame];
    console.log('Game');
    return (
      <View style={styles.container}>
        <Lane frame={frame} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
