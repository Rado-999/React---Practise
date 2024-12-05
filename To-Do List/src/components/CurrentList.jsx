import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function CurrentList(){
    const {listsCollection,isSaved} = useContext(AppContext)

    return(
        <div className="current-list-container">
            {listsCollection.map(<ToDoItem />)}
            {!isSaved && <button className="current-list-save-btn">Save</button>}
        </div>
    )
}

export default CurrentList