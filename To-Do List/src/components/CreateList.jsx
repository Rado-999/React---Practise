import React, { useContext, useState } from "react";
import AppContext from "./Context/AppContext";

function CreateList({listCollectionIsEmpty, handleCancleButton}) {
  const [userListNameInput,setUserListNameInput] = useState('')
  const {listsCollection, setListCollection,collectionID, setCollectionID , setCurrentList , setCreateBtnIsClicked} = useContext(AppContext)

  function handleUserInput(e){
    setUserListNameInput(e.target.value)
  }

  function createNewList(){
    if (checkIfListNameIsFree() && userListNameInput.length > 2) {
      let newList = { id: collectionID, listName: userListNameInput, tasks: [] };
      setListCollection((prevList) => [...prevList, newList]);
      setCurrentList(newList);
      setCollectionID(collectionID + 1);
      setUserListNameInput("");
      setCreateBtnIsClicked(false);
    }
  }

  function checkIfListNameIsFree() {
    return !listsCollection.some((list) => list.listName.toLowerCase() === userListNameInput.toLowerCase());
  }

  return (
    <div className="create-list-alert-container">
      {!listCollectionIsEmpty() && <button onClick={()=>{handleCancleButton()}} className="close-button">X</button>}
      <h6 className="create-list-alert-header">Enter a name of List</h6>
      <input className="create-list-alert-input" type="text" onChange={handleUserInput} value={userListNameInput}></input>
      <button className="create-list-alert-create-btn" onClick={createNewList}>Create</button>
    </div>
  );
}

export default CreateList;
