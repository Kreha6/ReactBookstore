import React, {Component} from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button, InputGroup, DropdownButton, Image, Col, Row, MenuItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBook,deleteBook,getBooks,resetForm} from '../../actions/bookActions';
import {findDOMNode} from 'react-dom';
import axios from 'axios';

class BooksForm extends Component {
  constructor(props){
    super(props);
    this.state={
      images:[{}],
      img:""
    }
  }

  handleSubmit = () =>{
    const book = {
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      images: findDOMNode(this.refs.img).value,
      price: findDOMNode(this.refs.price).value
    };
    this.props.postBook(book);
  }

  handleDelete = () =>{
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBook(bookId);
  }

  handleSelect(img){
    this.setState({
      img:`/images/${img}`
    })
  }

  resetForm = () =>{
    findDOMNode(this.refs.title).value = "";
    findDOMNode(this.refs.description).value = "";
    findDOMNode(this.refs.price).value = "";
    this.setState({
      img:""
    })
    this.props.resetForm();
  }

  render(){

    const books = this.props.books.map(book =>{
      return(
        <option key={book._id}>{book._id}</option>
      )
    })

    const images = this.state.images.map(function(imgArr, i){
      return(
        <MenuItem key={i} eventKey={imgArr.name}
          onClick={this.handleSelect.bind(this, imgArr.name)}>{imgArr.name}</MenuItem>
      )
    }, this)

    return (
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <InputGroup>
                <FormControl type="text" ref="img" value={this.state.img} />
                <DropdownButton
                  componentClass={InputGroup.Button}
                  id="input-dropdown-addon"
                  title="Select an image"
                  bsStyle="primary"
                >
                  {images}
                </DropdownButton>
              </InputGroup>
              <Image src={this.state.img} responsive />
            </Panel>
          </Col>
          <Col xs={12} sm={6}>
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
              <Button
                onClick={!this.props.msg ? this.handleSubmit : this.resetForm}
                bsStyle={!this.props.style ? "primary" : this.props.style}
              >
                {!this.props.msg ? "Save book" : this.props.msg}
              </Button>
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
          </Col>
        </Row>

      </Well>
    )
  }

  componentDidMount(){
    axios.get('/api/images')
      .then(response => {
        this.setState({images:response.data})
      })
      .catch(err => {
        this.setState({
          images:'error',
          img:''
        })
      })

      this.props.getBooks();
  }

}

function mapStateToProps(state) {
  return {
    books:state.books.books,
    msg: state.books.msg,
    style: state.books.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postBook,
    deleteBook,
    getBooks,
    resetForm
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
