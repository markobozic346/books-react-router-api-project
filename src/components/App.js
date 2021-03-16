import { useEffect, useState } from "react";
import BookCover from "./BookCover";
import "./App.css";

function App() {
  // data from api
  const [data, setData] = useState("");
  
  // search keywoard from input 
   const [keywords, setKeywords] = useState('new');
   const [change, setChange] = useState('');


  useEffect(() => {
    //fetch data from api
    async function fetchData() {
      let response = await fetch(`/search/${keywords}`);
      setData(await response.json());
    }
    fetchData();
  }, [keywords]);

  return (
    <div className="App">
       <input onChange={e => setChange(e.target.value)} type='text' placeholde="enter keywords"/>
       <button onClick={() => setKeywords(change)}>Search</button> 
      
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
