import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Searchbar.module.css";

function Searchbar(props) {
  const inputRef = useRef(null);
  const [term, setTerm] = useState("");
  const history = useNavigate();

  const focusInput = () => {
    inputRef.current.focus();
  };
  const search = () => {
    history(`/search/${term}`);
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className={styles.divs}>
      <input
        type="text"
        className={` ${styles.input}`}
        ref={inputRef}
        value={term}
        placeholder="Wpisz nazwę książki..."
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={onKeyDownHandler}
      ></input>
      <button type="button" className={`${styles.button12} `} onClick={search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        Szukaj
      </button>
    </div>
  );
}

export default Searchbar;
