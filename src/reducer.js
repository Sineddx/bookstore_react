export const reducer = (state, action) => {
  switch (action.type) {
    case "MODIFY_CART":
      return { ...state, cart: action.cart };
    case "LOGIN":
      return { ...state, user: action.user };
    case "LOGOUT":
      window.localStorage.removeItem("token-data");
      return { ...state, user: null };
    default:
      throw new Error();
  }
};
export const initialState = {
  user: JSON.parse(window.localStorage.getItem("token-data")) ?? null,
  cart: JSON.parse(localStorage.getItem("cart")) ?? [],
};
