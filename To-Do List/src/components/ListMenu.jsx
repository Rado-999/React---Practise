import React from "react";
import ToDoItemInput from "./ToDoItemInput";
import CurrentList from "./CurrentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

function ListMenu() {
  return (
    <div className="list-menu-container">
      <div className="list-menu-navigation">
        <button className="list-menu-navigation-button add">
          <span className="label">Add</span>
          <FontAwesomeIcon className="icon" icon={faPlus} />
        </button>
        <button className="list-menu-navigation-button delete">
          <span className="label">Delete</span>
          <FontAwesomeIcon className="icon" icon={faTrash} />
        </button>
      </div>
      <ToDoItemInput />
      <CurrentList />
    </div>
  );
}

export default ListMenu;
