import React from "react";
import Square from "./Square.jsx";

class Grid extends React.Component {
  renderSquare(shoeId) {
    return (
      <td style={{ verticalAlign: "middle" }}>
        <Square
          shoe={this.props.squares[shoeId]}
          shoeId={shoeId}
          onClickSubmit={this.props.onClickSubmit}
        />
      </td>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
            </tr>
            <tr>
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
            </tr>
            <tr>
              {this.renderSquare(10)}
              {this.renderSquare(11)}
              {this.renderSquare(12)}
              {this.renderSquare(13)}
              {this.renderSquare(14)}
            </tr>
            <tr>
              {this.renderSquare(15)}
              {this.renderSquare(16)}
              {this.renderSquare(17)}
              {this.renderSquare(18)}
              {this.renderSquare(19)}
            </tr>
            <tr>
              {this.renderSquare(20)}
              {this.renderSquare(21)}
              {this.renderSquare(22)}
              {this.renderSquare(23)}
              {this.renderSquare(24)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
