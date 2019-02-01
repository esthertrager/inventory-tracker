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
    const shoes = [];
    for (let i = 0; i < 25; i++) {
      shoes.push(newShoe);
    }
    this.state = {
      shoes
    };
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit(shoe) {
    let newShoe = shoe;
    const newShoesArray = [
      ...this.state.shoes.slice(0, shoe.shoeId),
      newShoe,
      ...this.state.shoes.slice(shoe.shoeId + 1, this.state.shoes.length)
    ];
    this.setState({
      shoes: newShoesArray
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" style={{ padding: "15px" }}>
          <h1>Shoe Inventory Tracker</h1>
        </header>
        <Grid squares={this.state.shoes} onClickSubmit={this.onClickSubmit} />
      </div>
    );
  }
}

export default App;
