import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook,deleteBook} from '../../actions/bookActions';
import {findDOMNode} from 'react-dom';

class BooksForm extends Component {

  handleSubmit = () =>{
    const book = {
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value

    };
    this.props.postBook(book);
  }

  handleDelete = () =>{
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBook(bookId);
  }

  render(){

    const books = this.props.books.map(book =>{
      return(
        <option key={book._id}>{book._id}</option>
      )
    })

    return (
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter title"
            ref="title"/>
          </FormGroup>

          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter description"
            ref="description"/>
          </FormGroup>

          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter price"
            ref="price"/>
          </FormGroup>
          <Button onClick={this.handleSubmit} bsStyle="primary">Add book</Button>
        </Panel>

        <Panel bsClass="delete-form panel">
          <FormGroup controlId="formControlSelect">
            <ControlLabel>Select a book to delete</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="">
              <option value="select">select</option>
              {books}
            </FormControl>
          </FormGroup>
          <Button bsStyle="danger" onClick={this.handleDelete}>Delete book</Button>
        </Panel>
      </Well>
    )
  }

}

function mapStateToProps(state) {
  return {
    books:state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postBook,
    deleteBook
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
