import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AudioFilesWrapper } from "./Components/audio-files-wrapper"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AudioFilesWrapper />
      </header>
    </div>
  );
}

export default App;
