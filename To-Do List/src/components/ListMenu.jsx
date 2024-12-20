import React, { useContext, useState } from "react";
import ToDoItemInput from "./ToDoItemInput";
import CurrentList from "./CurrentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import AppContext from "./Context/AppContext";

function ListMenu() {
  const {
    setCreateBtnIsClicked,
    setDeleteListBtnIsClicked,
    currentList,
    setCurrentList,
    taskID,
    setTaskID
  } = useContext(AppContext);

  function handleCreateListButton() {
    setCreateBtnIsClicked(true);
  }

  function handleDeleteListBtn() {
    setDeleteListBtnIsClicked(true);
  }

  function handleAddTask(userToDoItemInput) {
    const currentListToDoTasks = currentList["tasks"];
    const tasksToLowerCase = currentListToDoTasks.map((task) =>
      task.taskName.toLowerCase()
    );
    if (userToDoItemInput.length < 3 || itemAlreadyInListCollection()) {
      return;
    }

    function itemAlreadyInListCollection() {
      return tasksToLowerCase.includes(userToDoItemInput.toLowerCase());
    }

    setCurrentList((prevState) => ({
      ...prevState,
      tasks: [
        ...prevState.tasks,
        { taskID: taskID, taskName: userToDoItemInput },
      ],
    }));
    setTaskID(taskID + 1);
  }

  return (
    <div className="list-menu-container">
      <div className="list-menu-navigation">
        <button
          onClick={handleCreateListButton}
          className="list-menu-navigation-button add"
        >
          <span className="label">Add</span>
          <FontAwesomeIcon className="icon" icon={faPlus} />
        </button>
        <button
          onClick={handleDeleteListBtn}
          className="list-menu-navigation-button delete"
        >
          <span className="label">Delete</span>
          <FontAwesomeIcon className="icon" icon={faTrash} />
        </button>
      </div>
      <h1 className="list-menu-list-title">{currentList.listName}</h1>
      <ToDoItemInput handleAddTask={handleAddTask} />
      <CurrentList />
    </div>
  );
}

export default ListMenu;
