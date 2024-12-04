import React, { useCallback, useContext } from "react";
import AppContext from "./Context/AppContext";

function DeleteListAlert(){
    const {currentList, setIsDeleteBtnClicked , setListCollection , setCurrentList , listCollection} = useContext(AppContext)

    function onDeleteList(){
        setListCollection((prevCollection)=>
            prevCollection.filter((item)=>item.id !== currentList.id)
        )
        setCurrentList(listCollection[0])
        setIsDeleteBtnClicked(false)
    }

    return(
        <div className="alert-container">
            <div className="alert">
                <p className="alert-header">Are you sure you want to delete {currentList.name} list</p>
                <p className="alert-question">Please Confirm</p>
                <div className="alert-buttons">
                    <button className="dont-save-btn" onClick={onDeleteList}>Confirm</button>
                    <button className="cancel-btn" onClick={()=>setIsDeleteBtnClicked(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteListAlert