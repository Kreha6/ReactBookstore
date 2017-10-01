import axios from 'axios';

export function getBooks() {
  return function(dispatch){
    axios.get('/api/books')
      .then(function(response){
        console.log(response);
        dispatch({type: "GET_BOOKS", payload: response.data})
      })
      .catch(function(err){
        console.log('error');
        dispatch({type:"GET_REJECTED",payload:"there was an error while getting"})
      })
  }
}

export function postBook(book) {
  return function(dispatch){
    axios.post('/api/books', book)
      .then(function(response){
        dispatch({type: "POST_BOOK", payload: response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_REJECTED",payload:"there was an error while posting"})
      })
  }
}

export function deleteBook(id) {
  return function(dispatch){
    axios.delete('/api/books/' + id)
      .then(function(response){
        dispatch({type: "DELETE_BOOK", payload: id})
      })
      .catch(function(err){
        dispatch({type:"DELETE_REJECTED",payload:"there was an error while deleting"})
      })
  }
}

export function updateBook(book) {
  return {type: "UPDATE_BOOK", payload: book}
}
