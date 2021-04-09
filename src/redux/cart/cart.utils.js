export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
  if(existingCartItem) {
    return cartItems.map(item => {
      if(item.id === existingCartItem.id) {
        item.quantity++;
      }
      return item;
    })
  } else {
    return [...cartItems, {...itemToAdd, quantity: 1}];
  }
}
