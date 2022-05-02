import { useContext } from "react";
import styles from "./Book.module.css";
import ReducerContext from "../../../context/reducerContext";
import { toast } from "react-toastify";
import modifyCart from "../../../helpers/cartHelper";
export default function Book(props) {
  const context = useContext(ReducerContext);

  const addToCart = (item) => {
    let obj = {
      id: item.id,
      title: item.title,
      author: item.author,
      price: item.price,
      quantity: 1,
      img: item.image,
    };
    modifyCart(obj, "ADD", context);
    showNotification();
  };
  const showNotification = () => {
    toast("Książka została dodana do koszyka", {
      position: "bottom-right",
      type: "success",
      theme: "colored",
    });
  };
  return (
    <div type="button" className={styles.item}>
      <div className={styles.new}>
        <p>Nowość</p>
      </div>
      <div className={styles.divImage}>
        <img className={styles.image} src={props.image} alt={props.title}></img>
      </div>
      <div className={styles.details}>
        <div className={styles.titleBox}>
          <h4>{props.title}</h4>
        </div>
        <h5>{props.author}</h5>
        <h6>{props.price} PLN</h6>
      </div>
      <div className={styles.divButton}>
        <button
          className={styles.btn}
          onClick={() => {
            addToCart(props);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>{" "}
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
