import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../../component/Button';

import Lane from './Lane';

export default class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFramePosition: 0,
      maxFramePosition: 10
    };
  }
  handlePreviousFramePosition = () => {
    if (this.state.selectedFramePosition <= 0) {
      return;
    }
    this.setState({
      selectedFramePosition: this.state.selectedFramePosition - 1
    });
  };
  handleNextFramePosition = () => {
    if (this.state.selectedFramePosition >= this.state.maxFramePosition - 1) {
      return;
    }
    this.setState({
      selectedFramePosition: this.state.selectedFramePosition + 1
    });
  };
  render() {
    const { count, frames = [] } = this.props;
    const { selectedFramePosition } = this.state;
    const frame = frames[selectedFramePosition];
    console.log('Game');
    return (
      <View style={styles.container}>
        <Lane frame={frame} />
        <View style={styles.footer}>
          <View style={styles.prev}>
            <Button
              onPress={this.handlePreviousFramePosition}
              title={`Frame ${selectedFramePosition}`}
            />
          </View>
          <View style={styles.game}>
            <Button
              onPress={() => {}}
              title={`Frame ${selectedFramePosition + 1}`}
            />
          </View>
          <View style={styles.next}>
            <Button
              onPress={this.handleNextFramePosition}
              title={`Frame ${selectedFramePosition + 2}`}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
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
