export function booksReducer(state = {
  books: [
    {
      _id:1,
      title:"first book",
      description:"first description",
      price:"10.00"
    },
    {
      _id:2,
      title:"2nd book",
      description:"2nd description",
      price:"20.00"
    }
  ]
}, action) {
  switch (action.type) {
    case "GET_BOOKS":
      {
        return {
        ...state,
        books: [...state.books]
      }

    }
    case "POST_BOOK":
      {
        return {
        ...state,
        books: [
          ...state.books,
          action.payload
        ]
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
