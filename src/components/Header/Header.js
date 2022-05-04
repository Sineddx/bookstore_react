import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import CartModal from "../Modals/CartModal/CartModal";
import AuthModal from "../Modals/AuthModal/AuthModal";
import ReducerContext from "../../context/reducerContext";
import { useContext } from "react";

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
      <div className={styles.userPanel}>
        {context.state.user ? (
          <>
            {context.state.user.email}
            <button onClick={() => context.dispatch({ type: "LOGOUT" })}>
              Wyloguj
            </button>
          </>
        ) : (
          <AuthModal />
        )}
        <CartModal />
      </div>
    </header>
  );
}

export default Header;
