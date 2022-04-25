import { useParams } from "react-router-dom";
import Books from "../../components/Books/Books";

export default function SearchResult(props) {
  const { term } = useParams();

  return (
    <div className="card">
      <h2>Wyniki dla frazy "{term}" :</h2>
      <Books term={term} />
    </div>
  );
}
