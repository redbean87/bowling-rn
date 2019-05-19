import React from 'react';

import Game from './Game';
import * as data from './data';

export default class DataWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = data.getGame();
  }
  componentDidMount() {
    data.setSetState(this.setState);
  }
  handleUpdateGame = () => {
    this.setState(data.actions.updateGame(), () => {
      // console.log('updatedState');
    });
  };
  render() {
    const { frames = [] } = this.state;
    // console.log('DataWrapper');
    return (
      <Game
        frames={frames}
        updateGame={this.handleUpdateGame}
        count={this.state.count}
      />
    );
  }
}
