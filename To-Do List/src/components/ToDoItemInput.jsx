import React from "react";

function ToDoItemInput() {
  return (
    <form className="item-input-form">
      <input className="todo-input" type="text" placeholder="Add a new task..." />
      <button className="todo-btn">
        <span>Add</span>
      </button>
    </form>
  );
}

export default ToDoItemInput;
