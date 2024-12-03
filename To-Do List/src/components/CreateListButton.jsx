import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import CreateListAlert from "./CreateListAlert";
import SaveAlert from "./SaveAlert";

function CreateListButton() {
  const {
    setShowSaveAlert,
    currentList,
    setIsCreateBtnIsClicked,
    isSaved,
    setProceedAfterSave,
  } = useContext(AppContext);

  return (
    <button
      onClick={() => {
        if (isSaved) {
          setIsCreateBtnIsClicked(true);
        } else {
          setProceedAfterSave(true); 
          setShowSaveAlert(true); 
        }
      }}
    >
      Create New List
    </button>
  );
}

export default CreateListButton;
