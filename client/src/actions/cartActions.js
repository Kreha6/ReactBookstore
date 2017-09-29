export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    payload: book
  }
}

export function deleteCartItem(_id) {
  return {
    type: "DELETE_FROM_CART",
    payload: _id
  }
}

export function updateItem(_id,amount) {
  return {
    type: "UPDATE_ITEM",
    _id,
    amount
  }
}
