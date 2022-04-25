import styles from "./CartBody.module.css";
import { useContext } from "react";
import ReducerContext from "../../../context/reducerContext";
export default function CartBody(props) {
  const context = useContext(ReducerContext);
  const addQuantity = (item) => {
    let cartCopy = [...context.state.cart];
    let existingItem = cartCopy.find((cartItem) => cartItem.id == item.id);
    existingItem.quantity += 1;
    context.dispatch({ type: "ADD_TO_CART", cart: cartCopy });
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };
  const subtractQuantity = (item) => {
    let cartCopy = [...context.state.cart];
    let existingItem = cartCopy.find((cartItem) => cartItem.id == item.id);
    existingItem.quantity -= 1;
    if (existingItem.quantity < 1) {
      cartCopy = cartCopy.filter((cartItem) => cartItem.id !== item.id);
    }
    context.dispatch({ type: "ADD_TO_CART", cart: cartCopy });
    localStorage.setItem("cart", JSON.stringify(cartCopy));
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <label className={styles.label}>Koszyk</label>
        <button
          className={styles.close}
          onClick={() => context.dispatch({ type: "CLOSE_MODAL" })}
        >
          X
        </button>
      </div>
      {context.state.cart.length > 0 ? (
        context.state.cart.map((item) => (
          <div className={styles.cartItems} key={item.id}>
            <div className={styles.img}>
              <img src={item.img} style={{ height: "120px" }}></img>
            </div>
            <div className={styles.details}>
              <h1 className={styles.title}>{item.title}</h1>
              <h3 className={styles.author}>{item.author}</h3>
              <h5 className={styles.author}>
                {(item.price * item.quantity).toFixed(2)} PLN
              </h5>
            </div>
            <div className={styles.counter}>
              <div
                type="button"
                onClick={() => subtractQuantity(item)}
                className={styles.btn}
              >
                -
              </div>
              <div className={styles.count}>{item.quantity}</div>
              <div
                type="button"
                onClick={() => addQuantity(item)}
                className={styles.btn}
              >
                +
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noItems}>
          <p>Twój koszyk jest pusty.</p>
        </div>
      )}
    </div>
  );
}
