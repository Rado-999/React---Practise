import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CreateList from "./CreateList";
import ListMenu from "./ListMenu";

function ListContainer() {
  const { listCollection, createBtnIsClicked } = useContext(AppContext);

  function isListCollectionEmpty() {
    return listCollection.length === 0;
  }

  function manageList(){
    if (isListCollectionEmpty || createBtnIsClicked ){
        return <CreateList />
    }
    if (showSaveAlert){
        return <SaveAlert />
    }
    return <ListMenu />

  }

  return (
    <div className="list-menu-container">
      <h1 className="list-menu-header">To-Do List</h1>
      {manageList()}
    </div>
  );
}

export default ListContainer;
