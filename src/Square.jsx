import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserActionPrompt: false,
      showAddItemModal: false,
      shoe: {
        shoeId: props.shoeId,
        brand: "",
        style: "",
        size: "",
        upcid: ""
      }
    };
    this.onClickSquare = this.onClickSquare.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onClickAdd(e) {
    const newShoe = {
      shoeId: this.props.shoeId,
      brand: "",
      style: "",
      size: "",
      upcid: ""
    };
    this.setState({
      shoe: newShoe,
      showUserActionPrompt: false,
      showAddItemModal: true
    });
  }

  onClickDelete(e) {
    const newShoe = {
      shoeId: this.props.shoeId,
      brand: "",
      style: "",
      size: "",
      upcid: ""
    };
    this.setState({
      showUserActionPrompt: false
    });
    this.props.onClickSubmit(newShoe);
  }

  onClickEdit(e) {
    this.setState({
      showUserActionPrompt: false,
      showAddItemModal: true
    });
  }

  onClickSquare(shoeId) {
    this.setState({
      showUserActionPrompt: true
    });
  }

  onClickSubmit() {
    this.props.onClickSubmit(this.state.shoe);
    this.setState({
      showAddItemModal: false
    });
    console.log(this.state);
  }

  onInputChange(event, value) {
    const shoe = this.state.shoe;
    const updatedShoe = Object.assign({}, shoe, value);
    this.setState({
      shoe: updatedShoe
    });
  }

  renderAddItemModal(shoeId) {
    return (
      <div className="static-modal">
        <Modal.Dialog>
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
            <Button
              onClick={e =>
                this.onClickSubmit(e, this.value, this.name, this.shoeId)
              }
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  renderUserActionPromptModal() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Footer>
            <Button onClick={this.onClickAdd}>Add</Button>
            <Button onClick={this.onClickEdit}>Edit</Button>
            <Button onClick={this.onClickDelete}>Delete</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.showUserActionPrompt
          ? this.renderUserActionPromptModal()
          : null}
        <div onClick={this.onClickSquare} style={{ cursor: "pointer" }}>
          {this.state.shoe.shoeId}
        </div>
        {this.state.showAddItemModal
          ? this.renderAddItemModal(this.props.shoeId)
          : null}
      </div>
    );
  }
}

export default Square;
