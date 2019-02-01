import React, { Component } from "react";
import "./App.css";
import Grid from "./Grid.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    const newShoe = {
      brand: "",
      style: "",
      size: "",
      upcid: ""
    };
    const squares = [];
    for (let i = 0; i < 25; i++) {
      squares.push(newShoe);
    }
    this.state = {
      squares
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit(shoe) {
    let newSquare = shoe;
    const newSquaresArray = [
      ...this.state.squares.slice(0, shoe.shoeId),
      newSquare,
      ...this.state.squares.slice(shoe.shoeId + 1, this.state.squares.length)
    ];
    this.setState({
      squares: newSquaresArray
    });
    console.log(newSquaresArray);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ padding: "15px" }}>
          <h1>Shoe Inventory Tracker</h1>
        </header>
        <Grid
          squares={this.state.squares}
          onClickSubmit={this.onClickSubmit}
          onClickDelete={this.onClickDelete}
        />
      </div>
    );
  }
}

export default App;
