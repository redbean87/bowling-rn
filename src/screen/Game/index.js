import React from 'react';

import Game from './Game';
import * as dataManager from '../../dataManagement';

export default class DataWrapper extends React.PureComponent {
  state = dataManager.newGame();

  handlePinPress = (frameIndex, pinIndex, pin) => {
    this.setState(dataManager.actions.updatePin(frameIndex, pinIndex, pin));
  };
  render() {
    const { frames = [] } = this.state;
    console.log('DataWrapper');
    return <Game frames={frames} handlePinPress={this.handlePinPress} />;
  }
}
