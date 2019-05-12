import React from 'react';
import Game from './Game';

import data from './data';

const DataWrapper = () => {
  return <Game content={data.content} />;
};

export default DataWrapper;
