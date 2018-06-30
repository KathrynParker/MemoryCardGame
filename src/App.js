import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3 className="App-subtitle">Match cards to win</h3>
        </header>
        <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
        </div>
        <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
        </div>
        <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
        </div>
        <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
        </div>

      </div>

    );
  }
}




export default App;
