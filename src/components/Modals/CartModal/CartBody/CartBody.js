import styles from "./CartBody.module.css";
import { useContext } from "react";
import ReducerContext from "../../../../context/reducerContext";
import modifyCart from "../../../../helpers/cartHelper";
export default function CartBody(props) {
  const context = useContext(ReducerContext);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <label className={styles.label}>Koszyk</label>
        <button className={styles.close} onClick={() => props.setShow(false)}>
          X
        </button>
      </div>
      {context.state.cart.length > 0 ? (
        context.state.cart.map((item) => (
          <div className={styles.cartItems} key={item.id}>
            <div className={styles.img}>
              <img
                src={item.img}
                style={{ height: "120px" }}
                alt={item.title}
              ></img>
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
                onClick={() => modifyCart(item, "MINUS", context)}
                className={styles.btn}
              >
                -
              </div>
              <div className={styles.count}>{item.quantity}</div>
              <div
                type="button"
                onClick={() => modifyCart(item, "PLUS", context)}
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
