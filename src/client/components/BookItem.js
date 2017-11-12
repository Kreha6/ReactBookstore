import React, {Component} from 'react';
import {Image, Well, Col, Row, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addToCart,updateItem} from '../actions/cartActions';
import {bindActionCreators} from 'redux';

class BookItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isClicked:false
    };

  }
  onReadMore = () =>{
    this.setState({isClicked:!this.state.isClicked})
  }

  handleAdd = () =>{
    const {book} = this.props;
    const newBook = {
      _id:book._id,
      title:book.title,
      description:book.description,
      images: book.images,
      price:book.price,
      quantity:1
    }
    if(this.props.cart.length > 0){
      let itemIndex = this.props.cart.findIndex(item => {
        return item._id === book._id;
      })
      if(itemIndex == -1){
        let newCart = [...this.props.cart, newBook];
        this.props.addToCart(newCart);
      }
      else{
        this.props.updateItem(book._id,1, this.props.cart);
      }
    }
    else{
      let newCart = [...this.props.cart, newBook];
      this.props.addToCart(newCart);
    }
  }

  render() {
    const {book} = this.props;
    return (
      <Well>
        <Row bsClass="row book-item">
          <Col xs={12} sm={4}>
            <Image src={book.images} responsive/>
          </Col>
          <Col xs={12} sm={8}>
            <h6>{book.title}</h6>
            <p>
              {(book.description.length>50 && !this.state.isClicked) ? book.description.substring(0,50) : book.description}
              <button className="book-item__button--show" onClick={this.onReadMore}>
                {(book.description.length>50 && !this.state.isClicked && book.description != null) ? "...read more" : (book.description.length>50 ?"Read less" : "") }
              </button>
            </p>
            <h6>{book.price}</h6>
            <Button bsClass="btn btn-primary book-item__button--add" onClick={this.handleAdd} bsStyle="primary">Add to cart</Button>
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
