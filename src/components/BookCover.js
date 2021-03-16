import React from "react";
import "./BookCover.css";
import { Link } from "react-router-dom";
function BookCover({ title, subtitle, imageUrl, price, bookID }) {
  return (
    <div className="book-cover">
      <img className="img" src={imageUrl} alt="book cover image" />

      <div className="text-container">
        <h3 className="title">{title}</h3>
        <h5 className="subtitle">{subtitle}</h5>
        <p className="price">
          price:<span className="bigger">{price}</span>
        </p>
        
        <Link to={`/book/${bookID}`}>More Info</Link>
      </div>
    </div>
  );
}

export default BookCover;
