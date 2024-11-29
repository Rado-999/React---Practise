import React, { useContext, useState } from "react";
import AppContext from "./Context/AppContext";
import CurrentList from "./CurrentList";
import ListMaker from "./ListMaker";

function CreateListAlert() {
  const {
    listCollection,
    setListCollection,
    collectionId,
    setCollectionId,
    setShowCreateListAlert,
    setCurrentList,
    setIsCreateBtnIsClicked,
    currentList,
    isListCollecionEmpty,
    setIsSaved
  } = useContext(AppContext);
  const [userValue, setUserValue] = useState("");

  function handleUserValue(e) {
    setUserValue(e.target.value);
  }

  function createList() {
    if (checkIfListNameIsFree() && userValue.length > 2) {
      let newList = { id: collectionId, listName: userValue, listItems: [] };
      setListCollection((prevList) => [...prevList, newList]);
      setCurrentList(newList);
      setCollectionId(collectionId + 1);
      setUserValue("");
      setIsCreateBtnIsClicked(false);
      setIsSaved(true)
    }
  }

  function checkIfListNameIsFree() {
    return !listCollection.some((list) => list.listName === userValue);
  }

  return (
    <div className="create-list-alert-conatiner">
      <div className="create-list-alert">
        <h6 className="create-list-alert-heading">Enter a Name of List</h6>
        <input type="text" value={userValue} onChange={handleUserValue}></input>
        <div>
          <button onClick={createList}>Create</button>
          {isListCollecionEmpty ? null : (
            <button
              onClick={() => {
                setIsCreateBtnIsClicked(false);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateListAlert;
