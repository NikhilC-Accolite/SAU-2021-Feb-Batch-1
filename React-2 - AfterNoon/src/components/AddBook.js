import React, { useState } from "react";

import image1 from "./images/c.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { insertBook } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./componentStyles.css";

export const AddBook = () => {
  const books = useSelector((state) => state.bookStorage) || [];
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookCopies, setBookCopies] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookRating, setBookRating] = useState("");
  let history = useHistory();

  return (
    <div
      style={{
        backgroundImage: `url(${image1})`,
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}
    >
      <center>
        <h1></h1>
        <u>
          <h1>Enter Book Credentials</h1>
        </u>
      </center>
      <Form.Group controlId="formBasicEmail">
        <b>
          <Form.Label style={{ color: "olive" }}>Book Name</Form.Label>
        </b>
        <Form.Control
          onInput={(e) => setBookName(e.target.value)}
          className="trans"
          size="lg"
          type="text"
          placeholder="Please enter the name of the new book"
        />
      </Form.Group>

      <Form.Group>
        <b>
          <Form.Label style={{ color: "olive" }}>Author</Form.Label>
        </b>
        <Form.Control
          onInput={(e) => setBookAuthor(e.target.value)}
          className="trans"
          size="lg"
          type="text"
          placeholder="Who wrote this book ?"
        />
      </Form.Group>

      <Form.Group>
        <b>
          <Form.Label style={{ color: "olive" }}>Number of Copies Sold</Form.Label>
        </b>
        <Form.Control
          onInput={(e) => setBookCopies(e.target.value)}
          className="trans"
          size="lg"
          type="text"
          placeholder="How many copies were sold ?"
        />
      </Form.Group>

      <Form.Group>
        <b>
          <Form.Label style={{ color: "olive" }}>Price of the Book</Form.Label>
        </b>
        <Form.Control
          onInput={(e) => setBookPrice(e.target.value)}
          className="trans"
          size="lg"
          type="text"
          placeholder="What is the price of the Book in Rupees ?"
        />
      </Form.Group>

      <Form.Group>
        <b>
          <Form.Label style={{ color: "olive" }}>Rate the book on scale of 10</Form.Label>
        </b>
        <Form.Control
          onInput={(e) => setBookRating(e.target.value)}
          className="trans"
          size="lg"
          type="text"
          placeholder="How do you Rate the book on scale of 10 ?"
        />
      </Form.Group>

      <center>
        <Button
          onClick={() => {
            console.log(bookName, bookAuthor, bookCopies, bookPrice, bookRating)
            dispatch(insertBook(bookName, bookAuthor, bookCopies, bookPrice, bookRating));
            history.push("/list");
          }}
        >
          Register Book
        </Button>
      </center>
    </div>
  );
};
