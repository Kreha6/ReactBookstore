export function cartReducer(state = {
  cart: [],
  totalAmount:0,
  totalQty:0
}, action) {
  switch (action.type) {
    case "GET_CART":
    {
      const total = totals(action.payload);
      return {
      ...state,
      cart: action.payload,
      totalAmount:total.amount,
      totalQty:total.qty
      }
    }
    case "ADD_TO_CART":
      {
        const total = totals(action.payload);
        return {
        ...state,
        cart: action.payload,
        totalAmount:total.amount,
        totalQty:total.qty

      }
    }
    case "DELETE_FROM_CART":
    {
      const total = totals(action.payload);
      return {
        ...state,
        cart: action.payload,
        totalAmount:total.amount,
        totalQty:total.qty
      }
    }
    case "UPDATE_ITEM":
    {
    const total = totals(action.payload);
    return {
      ...state,
      cart: action.payload,
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
