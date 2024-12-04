import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function SaveAlert(){
    const {proceedAfterSave,setProceedAfterSave, setCurrentList, currentList ,handleSaveListBtn,setIsCreateBtnIsClicked, setIsSaved, nextList, setNextList , setShowSaveAlert, nextListRef} = useContext(AppContext)

    function handleDontSaveBtn(){
        setIsSaved(true)
        setShowSaveAlert(false)
        if (nextListRef.current) {
            setCurrentList(nextListRef.current);
            setNextList(null);
            nextListRef.current = null
          }
        if (proceedAfterSave) {
            setProceedAfterSave(false)
            setIsCreateBtnIsClicked(true)
        }
    }

    return (
        <div className="alert-container">
            <div className="alert">
                <p className="alert-header">The list {currentList.name}" <span>has unsaved changes</span></p>
                <p className="alert-question">Do you want to save these changes?</p>
                <div className="alert-buttons">
                    <button onClick={handleSaveListBtn} className="save-btn">Save</button>
                    <button className="dont-save-btn" onClick={handleDontSaveBtn}>Dont' Save</button>
                    <button className="cancel-btn" onClick={()=>setShowSaveAlert(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default SaveAlert