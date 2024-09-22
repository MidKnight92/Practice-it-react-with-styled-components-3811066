import React from "react";
import BookDetails from "../BookDetails";

const BookList = ({books}) => {
  return (
    <div>
      <ul>
        {books.map(book => <BookDetails {...book} />)}
      </ul>
    </div>
);
}

export default BookList;