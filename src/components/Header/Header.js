import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton/CartButton";
import { useContext } from "react";
import ReducerContext from "../../context/reducerContext";
import Modal from "react-modal";
import CartBody from "./CartBody/CartBody";
function Header(props) {
  const context = useContext(ReducerContext);
  const history = useNavigate();
  const clickHandler = () => {
    history("/");
  };

  return (
    <header className={styles.header}>
      <p className={styles.text} type="button" onClick={clickHandler}>
        Książkarnia
      </p>

      <div className={styles.modalSpec}>
        <Modal
          style={{
            overlay: {
              position: "fixed",
              justifyContent: "right",
            },
            content: {
              position: "absolute",
              marginLeft: "67%",
              width: "30%",
              height: "100%",
            },
          }}
          isOpen={context.state.open}
          ariaHideApp={false}
          onRequestClose={() => context.dispatch({ type: "CLOSE_MODAL" })}
        >
          <CartBody />
        </Modal>
      </div>
      <CartButton />
    </header>
  );
}

export default Header;
