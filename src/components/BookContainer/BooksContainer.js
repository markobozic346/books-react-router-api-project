import React from "react";
import { useState, useEffect } from "react";
import BookCover from './BookCover/BookCover'
import "./BooksContainer.css"
const BooksContainer = ({keywords}) => {
  
  // data from api
  const [data, setData] = useState("");

  useEffect(() => {
    //fetch data from api
    async function fetchData() {
      let response = await fetch(`/search/${keywords}`);
      setData(await response.json());

     
    }
    fetchData();
  }, [keywords]);


  return (
    
     <div className="grid-container" >
       
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
  );
};

export default BooksContainer;
