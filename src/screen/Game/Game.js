import React from 'react';
import { StyleSheet, View } from 'react-native';

import Lane from './Lane';

export default class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content } = this.props;
    return (
      <View style={styles.container}>
        <Lane content={content} />
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
