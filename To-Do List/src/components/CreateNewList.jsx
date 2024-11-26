import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function CreateNewList() {
  const { toDoList, isCreateBtnIsClicked, setIsCreateBtnIsClicked } =
    useContext(AppContext);

  function createNewListButton() {
    if (toDoList.length >= 1) {
      setIsCreateBtnIsClicked(!isCreateBtnIsClicked);
    }
  }

  return (
    <button onClick={isCreateBtnIsClicked ? null : createNewListButton}>
      Create New List
    </button>
  );
}

export default CreateNewList;
