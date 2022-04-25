import { useContext } from "react";
import styles from "./Book.module.css";
import ReducerContext from "../../../context/reducerContext";
import { toast } from "react-toastify";
export default function Book(props) {
  const context = useContext(ReducerContext);
  const clickHandler = (e) => {
    console.log(props);
  };

  const addToCart = (item) => {
    let cartCopy = [...context.state.cart];
    let obj = {
      id: item.id,
      title: item.title,
      author: item.author,
      price: item.price,
      quantity: 1,
      img: item.img,
    };
    console.log(cartCopy);
    let existingItem = cartCopy.find((cartItem) => cartItem.id == obj.id);
    if (existingItem) {
      existingItem.quantity += obj.quantity;
    } else {
      cartCopy.push(obj);
    }
    context.dispatch({ type: "ADD_TO_CART", cart: cartCopy });
    localStorage.setItem("cart", JSON.stringify(cartCopy));
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
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img}></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.author}</p>
        <h6 className="card-text">{props.price} PLN</h6>
        <a
          href="#"
          onClick={() => addToCart(props)}
          className="btn btn-primary"
        >
          Dodaj do koszyka
        </a>
      </div>
    </div>
  );
}
