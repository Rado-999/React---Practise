import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function CollectionsContainer() {
  const {listsCollection,setCurrentList,currentList} = useContext(AppContext)

  function showPreviousList(list){
    if(currentList.listName !== list.listName){
      setCurrentList(list)
    }

  }


  return (
    <div className="collection-container">
      {listsCollection.map((list)=> <div key={list.id} onClick={()=>{showPreviousList(list)}} className="collection-item">{list.listName}</div>)}
    </div>
  );
}

export default CollectionsContainer;
