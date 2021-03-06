export function booksReducer(state = {
  books: []
}, action) {
  switch (action.type) {
    case "GET_BOOKS":
      {
        return {
        ...state,
        books: [...action.payload]
      }

    }
    case "POST_BOOK":
      {
        return {
        ...state,
        books: [
          ...state.books,
          action.payload
        ],
        msg:'Saved! Click to continue',
        style:'success',
        validation:'success'
      }
    }
    case "POST_REJECTED":
      {
        return {
        ...state,
        msg:'Please try again',
        style:'danger',
        validation:'error'
      }
    }
    case "RESET_FORM":
      {
        return {
        ...state,
        msg:null,
        style:'primary',
        validation:null

      }
    }
    case "DELETE_BOOK":
    {
      const currentBooks = [...state.books]
      const indexToDelete = currentBooks.findIndex(book => {
        return book._id == action.payload;
      })
      return {
        ...state,
        books: [
          ...currentBooks.slice(0, indexToDelete),
          ...currentBooks.slice(indexToDelete + 1)
        ]
      }
    }
    case "UPDATE_BOOK":
      {
        const currentBooks = [...state.books]
      const indexToUpdate = currentBooks.findIndex(book => {
        return book._id === action.payload._id;
      })
        const newBook = {
        ...currentBooks[indexToUpdate],
        title: action.payload.title
      }
      return {
        ...state,
        books: [
          ...currentBooks.slice(0, indexToUpdate),
          newBook,
          ...currentBooks.slice(indexToUpdate + 1)
        ]
      }
    }
    default:
    {
      return state;
    }
  }

}
