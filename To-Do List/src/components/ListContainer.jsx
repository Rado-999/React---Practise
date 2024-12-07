import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CreateList from "./CreateList";
import ListMenu from "./ListMenu";
import DeleteAlert from "./DeleteAlert"

function ListContainer() {
  const { listsCollection, createBtnIsClicked, deleteBtnIsClicked} =
    useContext(AppContext);

  function isListsCollectionEmpty() {
    return listsCollection.length === 0;
  }

  function manageList() {
    if (isListsCollectionEmpty() || createBtnIsClicked) {
      return <CreateList />;
    }
    if(deleteBtnIsClicked){
      return <DeleteAlert />
    }
    return <ListMenu />;
  }

  return (
    <div className="list-container">
      <h1 className="list-header">To-Do List</h1>
      {manageList()}
    </div>
  );
}

export default ListContainer;
