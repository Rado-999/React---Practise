import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CreateListAlert from "./CreateListAlert";
import SaveAlert from "./SaveAlert";

function CreateListButton() {
  const {
    setShowSaveAlert,
    currentList,
    setIsCreateBtnIsClicked,
    isSaved
  } = useContext(AppContext);

  

  return (
    <button
      onClick={
        ()=> isSaved ? setIsCreateBtnIsClicked(true) : setShowSaveAlert(true)
      }
    >
      Create New List
    </button>
  );
}

export default CreateListButton;
