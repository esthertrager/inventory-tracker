import React from 'react';
import Square from './Square.jsx';

class Grid extends React.Component {
  constructor(props) {
    super(props);

  this.onClickSubmit = this.onClickSubmit.bind(this);
  this.renderSquare = this.renderSquare.bind(this);
  }

  onClickSubmit(shoe) {
   this.props.onClickSubmit(shoe);
  };

  renderSquare(shoeId) {
    return (
    <Square shoe={this.props.squares[shoeId]} 
            shoeId={shoeId}
            onClickSubmit={this.onClickSubmit}
            onClickDelete={this.onClickDelete}/>
    );

  }
  
  render() {

    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(5)}</td>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
              <td>{this.renderSquare(9)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(10)}</td>
              <td>{this.renderSquare(11)}</td>
              <td>{this.renderSquare(12)}</td>
              <td>{this.renderSquare(13)}</td>
              <td>{this.renderSquare(14)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(15)}</td>
              <td>{this.renderSquare(16)}</td>
              <td>{this.renderSquare(17)}</td>
              <td>{this.renderSquare(18)}</td>
              <td>{this.renderSquare(19)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(20)}</td>
              <td>{this.renderSquare(21)}</td>
              <td>{this.renderSquare(22)}</td>
              <td>{this.renderSquare(23)}</td>
              <td>{this.renderSquare(24)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
