import React from "react";

function ToDoItemInput() {
  return (
    <form className="item-input-form">
      <input type="text" placeholder="Shopping" />
      <button type="submit">
        <span>Add</span>
      </button>
    </form>
  );
}

export default ToDoItemInput;
