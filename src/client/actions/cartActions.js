import axios from 'axios';


export function getCart(){
  return function(dispatch){
    axios.get('/api/cart')
     .then(function(response){
       console.log("cart");
       console.log(response)
       dispatch({type:"GET_CART", payload:response.data})
     })
     .catch(function(err){
       dispatch({type:"GET_CART_REJECTED", msg:"error when getting the cart from session"})
     })
  }
}

export function addToCart(cart){
  return function(dispatch){
    console.log(cart)
    axios.post("/api/cart", cart)
      .then(function(response){
        dispatch({type:"ADD_TO_CART", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"ADD_TO_CART_REJECTED", msg: 'error when adding to the cart'})
      })
  }
}

export function deleteCartItem(_id, cart) {
  const currentCart = cart;
  const indexToDelete = currentCart.findIndex(book => {
  return book._id === _id;
})

const newCart = [
  ...currentCart.slice(0, indexToDelete),
  ...currentCart.slice(indexToDelete + 1)
];

return function(dispatch){
  axios.post("/api/cart", newCart)
    .then(function(response){
      dispatch({type:"DELETE_FROM_CART", payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"DELETE_CART_REJECTED", msg: 'error while deleting cart item'})
    })
}
}

export function updateItem(_id,amount, cart) {
    const currentCart = cart;
    const indexToUpdate = currentCart.findIndex(book => {
    return book._id === _id;
  })
    const newBook = {
    ...currentCart[indexToUpdate],
    quantity: currentCart[indexToUpdate].quantity + amount
  }

  const newCart = [
    ...currentCart.slice(0, indexToUpdate),
    newBook,
    ...currentCart.slice(indexToUpdate + 1)
  ];

  return function(dispatch){
    axios.post("/api/cart", newCart)
      .then(function(response){
        dispatch({type:"UPDATE_ITEM", payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"UPDATE_CART_REJECTED", msg: 'error while updating the cart'})
      })
  }
}
