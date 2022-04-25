import Book from "./Book/Book";
import styles from "./Books.module.css";
export default function Books(props) {
  const books = [
    {
      id: 0,
      title: "Harry Potter",
      author: "JK Rowling",
      price: 29.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/hp1.jpg`,
    },
    {
      id: 1,
      title: "Harry Potter 2",
      author: "JK Rowling",
      price: 33.55,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/hp2.jpg`,
    },
    {
      id: 2,
      title: "Harry Potter 33",
      author: "JK Rowling",
      price: 11.11,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/hp3.jpg`,
    },
    {
      id: 3,
      title: "Tokyo Revengers",
      author: "Ken Wakui",
      price: 17.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/4.jpg`,
    },
    {
      id: 4,
      title: "Spy x Family",
      author: "Tatsuya Endo",
      price: 15.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/5.jpg`,
    },
    {
      id: 5,
      title: "Spy x Family",
      author: "Tatsuya Endo",
      price: 15.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/5.jpg`,
    },
    {
      id: 6,
      title: "Spy x Family",
      author: "Tatsuya Endo",
      price: 15.99,
      desc: "interesting book",
      img: `${process.env.PUBLIC_URL}/assets/img/5.jpg`,
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
      <div className="row">{props.term ? ifTerm() : ifNoTerm()}</div>
    </div>
  );
}
