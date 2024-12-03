import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CurrentList from "./CurrentList";

function PreviousLists() {
  const {currentList , showPreviousLists, listCollection, setCurrentList,isSaved ,setShowSaveAlert , clickedPrevItem, setClickedPrevItem,nextList, setNextList} = useContext(AppContext);

  function createPreviousListItem(item) {
    return (
      <li className="previous-lists-list-item" onClick={()=>handlePreviousListClick(item)}>
        <span>{item.listName}</span>
      </li>
    );
  }

  function handlePreviousListClick(item){
    setNextList(item)
    if (item.listName === currentList.listName){
      return
    }
    if (isSaved){
      setCurrentList(item)
    }else{
      setShowSaveAlert(true)
    }
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
