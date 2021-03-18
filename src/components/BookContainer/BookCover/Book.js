import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Book.css";
const Book = () => {
  // get user id from url
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    //fetch data for specific book
    async function fetchData() {
      let response = await fetch(`/books/${id}`);
      setData(await response.json());
    }
    fetchData();
  }, []);
  return (
    <div className="book">
      <h1 className="title">{data.title}</h1>
      <h3 className='desc'>{data.desc}</h3>

      <img className='image'src={data.image} alt="book image" />

      <table >
        <tbody>
          <tr>
            <td>Price</td>
            <td>{data.price}</td>
          </tr>
          <tr>
            <td>Authors</td>
            <td>{data.authors}</td>
          </tr>
          <tr>
            <td>Publisher</td>
            <td>{data.publisher}</td>
          </tr>
          <tr>
            <td>Pages</td>
            <td>{data.pages}</td>
          </tr>
          <tr>
            <td>Language</td>
            <td>{data.language}</td>
          </tr>
          <tr>
            <td>Year</td>
            <td>{data.year}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default Book;
