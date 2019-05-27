import React from 'react';

import Game from './Game';
import * as dataManager from '../../dataManagement';

export default class DataWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = dataManager.newGame();
  }
  componentDidMount() {}
  handleUpdatePin = () => {
    this.setState(dataManager.actions.updatePin());
  };
  render() {
    const { frames = [] } = this.state;
    console.log('DataWrapper');
    return <Game frames={frames} />;
  }
}
