import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import findWithAttr from "./FetchAttributes";
import "./componentStyles.css";

export const BookDetails = () => {

  let { id } = useParams();
  const books = useSelector((state) => state.bookStorage) || [];
  let selectedBook = findWithAttr(books, "bookId", id);

  return (
    <div >
      <div class="text-card">
        <div class="heading">
          <h1>Details of Book : {selectedBook.bookName}</h1>
        </div>

        <div class="text-box">
          <p>
            The Book Id : {selectedBook.bookId}
          </p>
          <p>
            The Author of the book : {selectedBook.bookAuthor}
          </p>
          <p>
            Number of copies sold : {selectedBook.bookCopies}
          </p>
          <p>
            Price of the book: Rs. {selectedBook.bookPrice}
          </p>
          <p>
            Rating of the book: {selectedBook.bookRating} /10
          </p>
        </div>
      </div>
    </div>
  );
};
