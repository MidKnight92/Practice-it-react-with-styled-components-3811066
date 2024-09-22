import React from "react";

const Todo = ({title})=> {
  return (
      <li key={title}>{title}</li>
  );
}

export default Todo;