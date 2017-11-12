import React, {Component} from 'react';
import {Modal, Panel, Well, Col, Row, Button, ButtonGroup, Label} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCartItem,updateItem, getCart} from '../actions/cartActions';

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen:false
    }
  }
  handleDelete = (_id) =>{
    this.props.deleteCartItem(_id, this.props.cart);
  }

  handleUpdate = (_id,amount,quantity) =>{
    if(amount == -1 && quantity == 1){
      this.props.deleteCartItem(_id, this.props.cart);
    }
    else{
      this.props.updateItem(_id,amount, this.props.cart);
    }
  }

  toggleModal = () =>{
    this.setState({modalOpen:!this.state.modalOpen})
  }

  render() {
    if (this.props.cart[0]) {
      const cartItems = this.props.cart.map(item => {
        return (
          <Panel key={item._id}>
            <Row>
              <Col xs={12} sm={4}>
                <h6>{item.title}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>usd. {item.price}</h6>
              </Col>
              <Col xs={12} sm={2}>
                <h6>qty.
                  <Label bsStyle="success">{item.quantity}</Label>
                </h6>
              </Col>
              <Col xs={6} sm={4}>
                <ButtonGroup bsClass="cart__buttons">
                  <Button
                    onClick={()=>{this.handleUpdate(item._id,-1,item.quantity)}}
                    bsStyle="default"
                  bsSize="small">-</Button>
                  <Button
                    onClick={()=>{this.handleUpdate(item._id,1,item.quantity)}}
                    bsStyle="default"
                  bsSize="small">+</Button>
                  <Button onClick={() => this.handleDelete(item._id)} bsStyle="danger" bsSize="small">DELETE</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Panel>
        )
      })

      return (
        <Panel header="cart" bsStyle="primary">
          {cartItems}
          <Row>
            <Col xs={12}>
              <h6>Total amount: {this.props.totalAmount}</h6>
              <Button onClick={this.toggleModal} bsStyle="success" bsSize="small">
                Proceed to checkout
              </Button>
            </Col>
          </Row>
          <Modal show={this.state.modalOpen} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              test
            </Modal.Body>
            <Modal.Footer>
              <Col xs={6}>
                <h6>Total cost: {this.props.totalAmount}</h6>
              </Col>

              <Button onClick={this.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Panel>
      )
    } else {
      return (
        <div>
          add some books to your cart
        </div>
      )
    }

  }

}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQty:state.cart.totalQty
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem,
    updateItem
  }, dispatch)
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(Cart)
}
