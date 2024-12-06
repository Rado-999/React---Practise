import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CreateList from "./CreateList";
import ListMenu from "./ListMenu";
import SaveAlert from "./SaveAlert";

function ListContainer() {
  const { listsCollection, createBtnIsClicked, showSaveAlert } =
    useContext(AppContext);

  function isListsCollectionEmpty() {
    return listsCollection.length === 0;
  }

  function manageList() {
    if (isListsCollectionEmpty() || createBtnIsClicked) {
      return <CreateList />;
    }
    if (showSaveAlert) {
      return <SaveAlert />;
    }
    return <ListMenu />;
  }

  return (
    <div className="list-menu-container">
      <h1 className="list-menu-header">To-Do List</h1>
      {manageList()}
    </div>
  );
}

export default ListContainer;
