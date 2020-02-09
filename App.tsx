import React from 'react';
import { Provider } from 'react-redux';
import store from './src/reducers/store.js';

import AppContainer from './src/containers/App';
import Game from './src/screens/Game';

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
