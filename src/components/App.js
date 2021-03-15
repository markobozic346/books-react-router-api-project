import { useEffect, useState } from "react";
import BookCover from "./BookCover";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  //  const [books, setBooks] = useState(data.books);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`/search/programming`);
      setData(await response.json());
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {console.log(data)}
      {data.books &&
        data.books.map((book, index) => (
          <BookCover
            key={index}
            title={book.title}
            subtitle={book.subtitle}
            price={book.price}
            imageUrl={book.image}
            bookID={book.isbn13}
          />
        ))}
    </div>
  );
}

export default App;
