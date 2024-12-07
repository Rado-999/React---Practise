import React, { useState } from "react";

function ToDoItem({ taskInfo, number, deleteTask }) {
  const [isDone, setIsDone] = useState(false);

  function handleTaskNameClick() {
    setIsDone(!isDone);
  }

  function handleDeleteBtnClick() {
    deleteTask(taskInfo.taskID)
  }

  return (
    <div className={`todo-item-container`}>
      <span className="todo-item-number">{number}</span>
      <p onClick={handleTaskNameClick} className={`todo-item ${isDone ? "completed" : ""}`}>
        {taskInfo.taskName}
      </p>
      {isDone && (
        <button onClick={handleDeleteBtnClick} className="todo-delete">
          Delete
        </button>
      )}
    </div>
  );
}

export default ToDoItem;
