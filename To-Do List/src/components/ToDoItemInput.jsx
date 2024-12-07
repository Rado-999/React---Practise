import React, {useState } from "react";

function ToDoItemInput({handleAddTask}) {
  const [userToDoItemInput, setUserToDoItemInput] = useState("");

  function handleUserInput(e) {
    setUserToDoItemInput(e.target.value);
  }

  function handleAddTaskButton(e){
    e.preventDefault()
    handleAddTask(userToDoItemInput)
    setUserToDoItemInput('')
  }

  return (
    <form className="item-input-form">
      <input
        onChange={handleUserInput}
        value={userToDoItemInput}
        className="todo-input"
        type="text"
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTaskButton} className="todo-btn">
        <span>Add</span>
      </button>
    </form>
  );
}

export default ToDoItemInput;
