import React, { useContext, useEffect, useState } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";
import SaveAlert from "./SaveAlert";
import CreateListAlert from "./CreateListAlert";
import AppContext from "./Context/AppContext";
import Navigation from "./Navigation";
import ListFooter from "./ListFooter";
import DeleteListAlert from "./DeleteListAlert";

function CurrentList() {
  const [number, setNumber] = useState(1);
  const {
    currentList,
    showCreateListAlert,
    isCreateBtnIsClicked,
    showSaveAlert,
    setToDoList,
    setCurrentList,
    setListCollection,
    listCollection,
    setIsSaved,
    isDeleteBtnClicked
  } = useContext(AppContext);
  

  function btnClick(userInput) {
    const listValues = currentList["listItems"];
    const itemsToLowerCase = listValues.map((item) => item.value.toLowerCase());

    const input = userInput;
    if (!input || input.length < 3) {
      return;
    }

    if (itemsToLowerCase.includes(userInput.toLowerCase())) {
      return;
    }

    setNumber(number + 1);
    setCurrentList((prevState) => ({
      ...prevState,
      listItems: [
        ...prevState.listItems,
        { id: number, value: userInput, color: getRandomColor() },
      ],
    }));
    setIsSaved(false)
  }

  

  function getRandomColor() {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  }

  function manageList() {
    if (showSaveAlert) {
      return <SaveAlert />;
    } else if (isCreateBtnIsClicked) {
      return <CreateListAlert />
    }else if (isDeleteBtnClicked){
      return <DeleteListAlert />
    }
     else {
      return (
        <div className="list-container">
          <h4>{currentList.listName}</h4>
          {<InputField btnClick={btnClick} />}
          <ItemList />
          {currentList.listItems.length > 0 && <ListFooter />}
        </div>
      );
    }
  }

  return (
    <div>
      <Navigation />
      {manageList()}
    </div>
  );
}

export default CurrentList;
