export function cartReducer(state = {
  cart: [],
  totalAmount:0,
  totalQty:0
}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        const newCart = [...state.cart, action.payload];
        const total = totals(newCart);
        return {
        ...state,
        cart: newCart,
        totalAmount:total.amount,
        totalQty:total.qty

      }
    }
    case "DELETE_FROM_CART":
    {
      const currentCart = [...state.cart]
      const indexToDelete = currentCart.findIndex(book => {
        return book._id === action.payload;
      })

      const newCart = [
        ...currentCart.slice(0, indexToDelete),
        ...currentCart.slice(indexToDelete + 1)
      ];
      const total = totals(newCart);
      return {
        ...state,
        cart: newCart,
        totalAmount:total.amount,
        totalQty:total.qty
      }
    }
    case "UPDATE_ITEM":
    {
      const currentCart = [...state.cart]
      const indexToUpdate = currentCart.findIndex(book => {
      return book._id === action._id;
    })
      const newBook = {
      ...currentCart[indexToUpdate],
      quantity: currentCart[indexToUpdate].quantity + action.amount
    }

    const newCart = [
      ...currentCart.slice(0, indexToUpdate),
      newBook,
      ...currentCart.slice(indexToUpdate + 1)
    ];
    const total = totals(newCart);
    return {
      ...state,
      cart: newCart,
      totalAmount:total.amount,
      totalQty:total.qty
    }
  }
    default:
    {
      return state;
    }
  }

}


export function totals(items) {
  const totalCost = items.map(item => {
    return item.price * item.quantity;
  }).reduce((a,b) =>{
    return a+b;
  },0);

  const totalQty = items.map(item => {
    return item.quantity;
  }).reduce((a,b) =>{
    return a+b;
  },0);

  return {amount:totalCost.toFixed(2),qty:totalQty}
}
