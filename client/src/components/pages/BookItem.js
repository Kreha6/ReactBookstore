import React, {Component} from 'react';
import {Well, Col, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addToCart,updateItem} from '../../actions/cartActions';
import {bindActionCreators} from 'redux';

class BookItem extends Component {

  handleAdd = () =>{
    const {book} = this.props;
    const newBook = {
      _id:book._id,
      title:book.title,
      description:book.description,
      price:book.price,
      quantity:1
    }
    if(this.props.cart.length > 0){
      let itemIndex = this.props.cart.findIndex(item => {
        return item._id === book._id;
      })
      if(itemIndex == -1){
        this.props.addToCart(newBook);
      }
      else{
        this.props.updateItem(book._id,1);
      }
    }
    else{
      this.props.addToCart(newBook);
    }
  }

  render() {
    const {book} = this.props;
    return (
      <Well>
        <Row>
          <Col xs={12}>
            <h6>{book.title}</h6>
            <p>{book.description}</p>
            <h6>{book.price}</h6>
            <Button onClick={this.handleAdd} bsStyle="primary">Add to cart</Button>
          </Col>
        </Row>
      </Well>
    )
  }
}

function mapStateToProps(state) {
  return {cart: state.cart.cart}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCart,
    updateItem
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
