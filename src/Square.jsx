import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class Square extends React.Component {
  // TODO: remove the constructor
  constructor(props) {
    super(props);
    this.state = {
    	showUserActionPrompt: false,
    	showAddItemModal: false
    };
    this.onClickSquare = this.onClickSquare.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickAdd(e) {
  	this.setState({
  		showUserActionPrompt: false,
  		showAddItemModal: true
  	});
  }

  onClickSquare(shoeId) {
   this.setState({
   	showUserActionPrompt: true
   })
  };

  onClickSubmit(shoeId) {
   this.setState({
   	showAddItemModal: false
   })
  };

  renderAddItemModal() {
	  return (
	    <div className="static-modal">
	      <Modal.Dialog>

	      <Modal.Body>
	      	<Form horizontal>
  <FormGroup controlId="brand">
    <Col componentClass={ControlLabel} sm={2}>
      Brand
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Brand" />
    </Col>
  </FormGroup>

  <FormGroup controlId="style">
    <Col componentClass={ControlLabel} sm={2}>
      Style
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Style" />
    </Col>
  </FormGroup>
  <FormGroup controlId="size">
    <Col componentClass={ControlLabel} sm={2}>
      Size
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Size" />
    </Col>
  </FormGroup>
  <FormGroup controlId="upcid">
    <Col componentClass={ControlLabel} sm={2}>
      UPC ID
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="UPC ID" />
    </Col>
  </FormGroup>
</Form>
	      </Modal.Body>

	      <Modal.Footer>
	      <Button onClick={this.onClickSubmit}>Submit</Button>
	      </Modal.Footer>
	      </Modal.Dialog>
	    </div>
	  );
	}

  renderUserActionPromptModal() {
	  return (
	    <div className="static-modal">
	      <Modal.Dialog>

	      <Modal.Body>Add Shoes</Modal.Body>

	      <Modal.Footer>
	      <Button onClick={this.onClickAdd}>Add</Button>
	      </Modal.Footer>
	      </Modal.Dialog>
	    </div>
	  );
	}

  render() {
    
    return (
    	<div>
    	{this.state.showUserActionPrompt ? this.renderUserActionPromptModal() : null}
    		<div 
	    		onClick={() => this.onClickSquare(this.props.shoeId)}
	    		style={{cursor: "pointer"}}>Click to Add Shoe
    		</div>
    	{this.state.showAddItemModal ? this.renderAddItemModal() : null}
    	</div>
    );
  }
}

export default Square;