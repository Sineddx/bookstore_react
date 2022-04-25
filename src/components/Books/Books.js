import Book from "./Book/Book";
import styles from "./Books.module.css";
export default function Books(props) {
  const books = [
    {
      id: 0,
      title: "Harry Potter i Kamień Filozoficzny",
      author: "JK Rowling",
      price: 29.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/hp1.jpg`,
    },
    {
      id: 1,
      title: "Harry Potter i Komnata Tajemnic",
      author: "JK Rowling",
      price: 33.55,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/hp2.jpg`,
    },
    {
      id: 2,
      title: "Harry Potter i Więzień Azkabanu",
      author: "JK Rowling",
      price: 11.11,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/hp3.jpg`,
    },
    {
      id: 3,
      title: "Tokyo Revengers #5",
      author: "Ken Wakui",
      price: 17.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/4.jpg`,
    },
    {
      id: 4,
      title: "Spy x Family #6",
      author: "Tatsuya Endo",
      price: 15.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/sf6.jpg`,
    },
    {
      id: 5,
      title: "Spy x Family #7",
      author: "Tatsuya Endo",
      price: 15.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/sf7.jpg`,
    },
    {
      id: 6,
      title: "Spy x Family #8",
      author: "Tatsuya Endo",
      price: 15.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/sf8.jpg`,
    },
  ];
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
