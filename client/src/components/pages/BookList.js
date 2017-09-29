import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/bookActions';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import BookItem from './BookItem';
import BooksForm from './BooksForm';

class BooksList extends Component {

  render() {

    const booksList = this.props.books.map(book => {
      return (
        <Col xs={12} sm={6} md={4} key={book._id}>
          <BookItem
            book={book} />
        </Col>
      )
    })

    return (
      <Grid>
        <Row bsClass="row booklist">
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {booksList}
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
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
