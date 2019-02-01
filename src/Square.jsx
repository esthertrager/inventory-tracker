import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserActionPrompt: false,
      showAddItemModal: false,
      shoe: props.shoe
    };
    this.onClickSquare = this.onClickSquare.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onClickClose() {
    this.setState({
      showUserActionPrompt: false,
      showAddItemModal: false
    });
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
      shoe: this.props.shoe,
      showUserActionPrompt: true
    });
  }

  onClickSubmit() {
    this.props.onClickSubmit(this.state.shoe);
    this.setState({
      showAddItemModal: false
    });
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
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <h4 style={{ margin: "0px" }}>Shoe Entry Form</h4>
            <span className="close" onClick={this.onClickClose}>
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

  renderShoeInfo(shoe) {
    if (
      this.props.shoe.brand === "" &&
      this.props.shoe.style === "" &&
      this.props.shoe.size === "" &&
      this.props.shoe.upcid === ""
    ) {
      return <img src="sneaker.png" alt={this.props.shoeId} />;
    }
    return (
      <div>
        {`${this.props.shoe.brand} ${this.props.shoe.style}`}
        <br />
        {`Size:  ${this.props.shoe.size}`}
        <br />
        {`UPC ID:  ${this.props.shoe.upcid}`}
      </div>
    );
  }

  renderUserActionPromptModal() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <span className="close" onClick={this.onClickClose}>
              x
            </span>
          </Modal.Header>
          <Modal.Body>
            <p>Please select what you would like to do:</p>
          </Modal.Body>
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
          {this.renderShoeInfo(this.props.shoe)}
        </div>
        {this.state.showAddItemModal
          ? this.renderAddItemModal(this.props.shoeId)
          : null}
      </div>
    );
  }
}

export default Square;
