import React from 'react';

import Game from './Game';
import * as data from './data';

const DataWrapper = () => {
  const { frames = [] } = data.getGame();
  console.log('DataWrapper');
  return <Game frames={frames} />;
};

export default DataWrapper;
