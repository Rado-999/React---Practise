import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import ToDoItem from "./ToDoItem"

function CurrentList(){
    const {listsCollection,isSaved,itemID,setItemID} = useContext(AppContext)

    return(
        <div className="current-list-container">
            {listsCollection.map((item)=><ToDoItem key = {1} id={2} item={item} />)}
            {!isSaved && <button className="current-list-save-btn">Save</button>}
        </div>
    )
}

export default CurrentList