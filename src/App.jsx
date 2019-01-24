import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{padding:"15px"}}>Shoe Inventory Tracker</header>
        <Grid/>
      </div>
    );
  }
}

export default App;
