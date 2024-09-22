import React from "react";

const BookDetails = ({id, title, author, year}) => {
  return (
    <li key={id}>{title} - {author} <i>{year}</i></li>
  );
}

export default BookDetails;