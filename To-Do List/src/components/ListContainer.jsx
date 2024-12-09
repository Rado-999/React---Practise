import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CreateList from "./CreateList";
import ListMenu from "./ListMenu";
import DeleteList from "./DeleteList"

function ListContainer() {
  const { listsCollection, createBtnIsClicked,setCreateBtnIsClicked, deleteListBtnIsClicked,setDeleteListBtnIsClicked} =
    useContext(AppContext);

  function listCollectionIsEmpty() {
    return listsCollection.length === 0;
  }

  function handleCancleButton(){
    createBtnIsClicked ? setCreateBtnIsClicked(false): setDeleteListBtnIsClicked(false)
  }

  function manageList() {
    if (listCollectionIsEmpty() || createBtnIsClicked) {
      return <CreateList handleCancleButton={handleCancleButton} listCollectionIsEmpty ={listCollectionIsEmpty} />;
    }
    if(deleteListBtnIsClicked){
      return <DeleteList handleCancleButton={handleCancleButton} />
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
