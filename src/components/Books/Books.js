import Book from "./Book/Book";
import styles from "./Books.module.css";
import db from "../../firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
export default function Books(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const booksCol = collection(db, "books");
      const bookSnapshot = await getDocs(booksCol);
      const bookList = bookSnapshot.docs.map((doc) => doc.data());
      setBooks(bookList);
    }
    getBooks();
  }, []);

  const ifTerm = () => {
    const newBooks = books.filter((book) =>
      book.title.toUpperCase().includes(props.term.toUpperCase())
    );
    console.log(newBooks);
    return newBooks.map((newBook) => <Book key={newBook.id} {...newBook} />);
  };
  const ifNoTerm = () => {
    return books.map((book) => <Book key={book.id} {...book} />);
  };

  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        {props.term ? ifTerm() : ifNoTerm()}
      </div>
    </div>
  );
}
