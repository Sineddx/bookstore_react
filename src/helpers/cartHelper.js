const modifyCart = (item, action, context) => {
  let cartCopy = [...context.state.cart];
  let existingItem;

  action
    ? (existingItem = cartCopy.find((cartItem) => cartItem.id === item.id))
    : (existingItem = null);

  switch (action) {
    case "PLUS":
      existingItem.quantity += 1;
      context.dispatch({ type: "MODIFY_CART", cart: cartCopy });
      return localStorage.setItem("cart", JSON.stringify(cartCopy));

    case "MINUS":
      existingItem.quantity -= 1;
      if (existingItem.quantity < 1) {
        cartCopy = cartCopy.filter((cartItem) => cartItem.id !== item.id);
      }
      context.dispatch({ type: "MODIFY_CART", cart: cartCopy });
      return localStorage.setItem("cart", JSON.stringify(cartCopy));

    case "ADD":
      existingItem
        ? (existingItem.quantity += item.quantity)
        : cartCopy.push(item);

      context.dispatch({ type: "MODIFY_CART", cart: cartCopy });
      return localStorage.setItem("cart", JSON.stringify(cartCopy));

    default:
      return null;
  }
};

export default modifyCart;
