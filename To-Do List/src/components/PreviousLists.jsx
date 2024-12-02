import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CurrentList from "./CurrentList";

function PreviousLists() {
  const {currentList , showPreviousLists, listCollection, setCurrentList,isSaved ,setShowSaveAlert , setPreviousItemIsClicked} = useContext(AppContext);

  function createPreviousListItem(item) {
    return (
      <li className="previous-lists-list-item" onClick={()=>handlePreviousListClick(item.listName)}>
        <span>{item.listName}</span>
      </li>
    );
  }

  function handlePreviousListClick(listName){
    if (currentList.listName === listName){
      return
    }
    if (!isSaved){
      setShowSaveAlert(true)
      setPreviousItemIsClicked(true)
    }
    const obj = listCollection.find(listItem => listItem.listName === listName);
    setCurrentList(obj)
    console.log(currentList)
  }

  if (showPreviousLists) {
    return (
      <div className="previous-lists-container">
        <ul className="previous-lists">
          {listCollection.map(createPreviousListItem)}
        </ul>
      </div>
    );
  }

}

export default PreviousLists;

// <li className="previous-lists-list-item">
// <span>List 2</span>
// </li>
// <li className="previous-lists-list-item">
// <span>List 3</span>
// </li>
