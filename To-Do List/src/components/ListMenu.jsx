import React, { useContext, useState } from "react";
import ToDoItemInput from "./ToDoItemInput";
import CurrentList from "./CurrentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import AppContext from "./Context/AppContext";

function ListMenu() {
  const [taskID, setTaskID] = useState(1);
  const {
    setCreateBtnIsClicked,
    setDeleteBtnIsClicked,
    currentList,
    setCurrentList,
  } = useContext(AppContext);

  function handleCreateListButton() {
    setCreateBtnIsClicked(true);
  }

  function handleDeleteListBtn() {
    setDeleteBtnIsClicked(true);
  }

  function handleAddTask(userToDoItemInput) {
    const currentListToDoTasks = currentList["tasks"];
    const itemsToLowerCase = currentListToDoTasks.map((task) =>
      task.taskName.toLowerCase()
    );
    if (userToDoItemInput.length < 3 || itemAlreadyInListCollection()) {
      return;
    }

    function itemAlreadyInListCollection() {
      return itemsToLowerCase.includes(userToDoItemInput.toLowerCase());
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
      <ToDoItemInput handleAddTask={handleAddTask} />
      <CurrentList />
    </div>
  );
}

export default ListMenu;
