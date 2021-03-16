import { useEffect, useState } from "react";
import BookCover from "./BookCover";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  //  const [books, setBooks] = useState(data.books);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`/search/angular`);
      setData(await response.json());
    }
    fetchData();
  }, []);

  return (
    <div className="App">

    <input type='text' placeholde="enter keywords">
      
      <div className="grid-container">
        {/* Checks if books propertie is defined, if true maps throught books */}
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
    </div>
  );
}

export default App;
