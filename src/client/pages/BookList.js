import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../actions/bookActions';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from '../components/BookItem';

class BookList extends Component {

  render() {
    console.log(this.props);
    const booksList = this.props.books.map(book => {
      return (
        <Col xs={12} sm={6} md={4} key={book._id}>
          <BookItem
            book={book}
          />
        </Col>
      )
    })

    return (
      <Grid>
        <Row bsClass="row booklist">
          {booksList}
          siema
        </Row>
      </Grid>
    )
  }
  componentDidMount() {
    this.props.getBooks()
  }
}

function mapStateToProps(state) {
  return {books: state.books.books}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks
  }, dispatch)
}

function loadData(store) {
  return store.dispatch(getBooks());
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(BookList),
  loadData
};
