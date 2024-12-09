import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function DeleteList({handleCancleButton}) {
  const {currentList,setCurrentList ,listsCollection, setListCollection,setDeleteListBtnIsClicked} = useContext(AppContext)

  function deleteList(){
    let updatedList = listsCollection.filter((list) => list.id !== currentList.id)
    setListCollection(updatedList)
    setCurrentList(updatedList[updatedList.length -1])
    setDeleteListBtnIsClicked(false)
  } 

  return (
    <div className="delete-container">
      <button onClick={()=>{handleCancleButton()}} className="close-button">X</button>
      <h2 className="delete-header">Are you sure?</h2>
      <p className="delete-alert">You will not be able to recover this list</p>
      <span className="delete-list-name">{currentList.listName}</span>
      <button className="delete-button" onClick={deleteList}>Delete</button>
    </div>
  );
}

export default DeleteList;
