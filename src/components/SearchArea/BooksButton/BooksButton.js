import { useNavigate } from "react-router-dom";

export default function BooksButton(props) {
  const history = useNavigate();
  const clickHandler = () => {
    history("books");
  };
  return (
    <div>
      <button onClick={clickHandler}>Sprawdź wszystkie oferty</button>
    </div>
  );
}
