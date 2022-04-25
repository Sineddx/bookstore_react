import styles from "./Menu.module.css";
function Menu(props) {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
