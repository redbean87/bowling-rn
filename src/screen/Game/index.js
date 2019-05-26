import React from 'react';

import Game from './Game';
import * as data from '../../data';

export default class DataWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = data.getGame();
  }
  componentDidMount() {
    data.setSetState(this.setState);
  }
  handleUpdatePin = () => {
    this.setState(data.actions.updatePin());
  };
  render() {
    const { frames = [] } = this.state;
    console.log('DataWrapper');
    return <Game frames={frames} />;
  }
}
