import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import SaveAlert from "./SaveAlert";
import InputField from "./InputField";
import ItemList from "./ItemList";
import AppContext from "./Context/AppContext";
import CreateListAlert from "./CreateListAlert";
import CurrentList from "./CurrentList";

function ListMaker() {
  const {
    setToDoList,
    isCreateBtnIsClicked,
    currentList,
    listCollection,
    showSaveAlert,
    isListCollecionEmpty,
  } = useContext(AppContext);

  return (
    <div className="list-maker-container">
      <div className="list-maker-header">
        <h1>To-Do List</h1>
      </div>
      {isListCollecionEmpty ? <CreateListAlert /> : <CurrentList />}
    </div>
  );
}

export default ListMaker;
