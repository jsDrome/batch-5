import React from 'react';
import { render } from 'react-dom';

import Game from './Game';

function App() {
  return <Game />;
}

render(<App />, document.getElementById('root'));