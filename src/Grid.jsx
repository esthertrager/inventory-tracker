import React from 'react';
import Square from './Square.jsx';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(25).fill(null),
    };
  }

  render() {

    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td><Square shoeId="0"/></td>
              <td><Square shoeId="1"/></td>
              <td><Square shoeId="2"/></td>
              <td><Square shoeId="3"/></td>
              <td><Square shoeId="4"/></td>
            </tr>
            <tr>
              <td><Square shoeId="5"/></td>
              <td><Square shoeId="6"/></td>
              <td><Square shoeId="7"/></td>
              <td><Square shoeId="8"/></td>
              <td><Square shoeId="9"/></td>
            </tr>
            <tr>
              <td><Square shoeId="10"/></td>
              <td><Square shoeId="11"/></td>
              <td><Square shoeId="12"/></td>
              <td><Square shoeId="13"/></td>
              <td><Square shoeId="14"/></td>
            </tr>
            <tr>
              <td><Square shoeId="15"/></td>
              <td><Square shoeId="16"/></td>
              <td><Square shoeId="17"/></td>
              <td><Square shoeId="18"/></td>
              <td><Square shoeId="19"/></td>
            </tr>
            <tr>
              <td><Square shoeId="20"/></td>
              <td><Square shoeId="21"/></td>
              <td><Square shoeId="22"/></td>
              <td><Square shoeId="23"/></td>
              <td><Square shoeId="24"/></td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Grid;
