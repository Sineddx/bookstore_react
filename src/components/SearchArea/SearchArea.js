import Searchbar from "../UI/Searchbar/Searchbar";
import BooksButton from "./BooksButton/BooksButton";
import styles from "./SearchArea.module.css";

function SearchArea(props) {
  return (
    <div className={styles.background}>
      <div className={styles.inputArea}>
        <p className={styles.text}>Najtańsze książki!</p>
        <Searchbar />
        <BooksButton />
      </div>
    </div>
  );
}
export default SearchArea;
