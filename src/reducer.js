export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, open: true };
    case "CLOSE_MODAL":
      return { ...state, open: false };
    case "ADD_TO_CART":
      return { ...state, cart: action.cart };
    default:
      throw new Error();
  }
};
export const initialState = {
  open: false,
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
};
