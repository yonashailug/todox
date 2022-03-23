import React from 'react';
import './App.css';
import Entry from './containers/entry';
import { loadSprites  } from './plugins/loadSvg'

loadSprites()

function App() {
  return (
    <div className="App">
      <Entry />
    </div>
  );
}

export default App
