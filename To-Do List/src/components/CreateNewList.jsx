import React from "react";

function CreateNewList ({isCreateBtnIsClicked, setIsCreateBtnIsClicked ,toDoList}){
    function createNewListButton(){
        if (toDoList.length >=1){
            setIsCreateBtnIsClicked(!isCreateBtnIsClicked)
        }
    }

    return (
        <button onClick={isCreateBtnIsClicked? null :createNewListButton}>
            Create New List
        </button>
    )
}

export default CreateNewList