import axios from 'axios';


export function postBook(book) {
  return function(dispatch){
    axios.post('/books/', book)
      .then(function(response){
        dispatch({type: "POST_BOOK", payload: response.data})
      })
      .catch(function(err){
        dispatch({type:"POST_REJECTED",payload:"there wad an error while posting"})
      })
  }
}

export function deleteBook(id) {

  return {type: "DELETE_BOOK", payload: id}
}

export function updateBook(book) {
  return {type: "UPDATE_BOOK", payload: book}
}

export function getBooks(book) {
  return {type: "GET_BOOKS"}
}
