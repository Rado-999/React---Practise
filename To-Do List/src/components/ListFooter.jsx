import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function ListFooter() {
    const {setListCollection, currentList, setIsSaved,setIsDeleteBtnClicked} = useContext(AppContext)

    function saveCurrentList(){
      setIsSaved(true)
      setListCollection((prevCollection)=>{
        const listIndex = prevCollection.findIndex((list) => list.id === currentList.id)
        const updatedCollection = prevCollection
        updatedCollection[listIndex] = currentList
        return updatedCollection
        ;})
    }



  return (
    <div className="footer-buttons">
        <button className="delete-list-btn" onClick={()=>setIsDeleteBtnClicked(true)}>Delete</button>
        <button onClick = {saveCurrentList} className="save-btn">Save</button>
    </div>
  );
}

export default ListFooter;
