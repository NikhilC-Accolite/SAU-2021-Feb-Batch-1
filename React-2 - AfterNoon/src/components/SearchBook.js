import React, { useState } from "react";
import "./componentStyles.css";
import image1 from "./images/c.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { findWithAttrs } from "./FetchAttributes";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export const SearchBook = () => {
  const [input, setInput] = useState("");
  const completeRecords = useSelector((state) => state.bookStorage) || [];

  let bookRecord = findWithAttrs(completeRecords, "bookName", input).map((book, i) => (

    <tr key={i}>
      <td>{i+1}</td>
      <td>
        <Link to={"/detail/" + book.bookId}>{book.bookName}</Link>
      </td>
      <td>{book.bookAuthor}</td>
    </tr>
  ));
  console.log(completeRecords);
  return (
    <div style={{ 
      backgroundImage: `url(${image1})` ,
      backgroundRepeat: 'no-repeat',
      height:"700px"
    }}><center>
      <h1 class="h1-main">See All Your Books Here</h1>
      <h1>Choose book to view information on the book</h1></center>
      <Form.Group>
        <h3>Try a book name: </h3>
        <Form.Control onInput={(e) => setInput(e.target.value)}  className="trans" size="lg" type="text" placeholder="Search for books" />
      </Form.Group>
      <center>
      <table class="styled-table">
        <thead >
          <tr>
            <th>Book Id</th>
            <th>Book Name</th>
            <th>Book Author</th>
          </tr>
        </thead>
        <tbody>{bookRecord}</tbody>
      </table>
      </center>
    </div>
  );
};
