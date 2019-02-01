import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

class InputModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: props.shoe
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event, value) {
    const shoe = this.state.shoe;
    const updatedShoe = Object.assign({}, shoe, value);
    this.setState({
      shoe: updatedShoe
    });
  }

  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <h4 style={{ margin: "0px" }}>Shoe Entry Form</h4>
            <span className="close" onClick={this.props.onClickClose}>
              x
            </span>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Brand</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand"
                  onChange={e =>
                    this.onInputChange(e, { brand: e.target.value })
                  }
                  value={this.state.shoe.brand}
                />
              </div>
              <div className="form-group">
                <label>Style</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Style"
                  onChange={e =>
                    this.onInputChange(e, { style: e.target.value })
                  }
                  value={this.state.shoe.style}
                />
              </div>
              <div className="form-group">
                <label>Size</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Size"
                  onChange={e =>
                    this.onInputChange(e, { size: e.target.value })
                  }
                  value={this.state.shoe.size}
                />
              </div>
              <div className="form-group">
                <label>UPC ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UPC ID"
                  onChange={e =>
                    this.onInputChange(e, { upcid: e.target.value })
                  }
                  value={this.state.shoe.upcid}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.props.onClickSubmit(this.state.shoe)}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default InputModal;
