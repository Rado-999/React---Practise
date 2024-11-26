import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import SaveAlert from "./SaveAlert";
import InputField from "./InputField";
import ItemList from "./ItemList";
import AppContext from "./Context/AppContext";

function ListMaker() {
  const [number, setNumber] = useState(1);
  // const [toDoList, setToDoList] = useState([])

  const { toDoList, setToDoList, isCreateBtnIsClicked } =
    useContext(AppContext);

  function btnClick(userInput) {
    const input = userInput;
    if (!input || input.length < 3) {
      return;
    }
    setToDoList((prevList) => {
      const itemsToLowerCase = prevList.map((item) => item.value.toLowerCase());
      if (!itemsToLowerCase.includes(userInput.toLowerCase())) {
        setNumber(number + 1);
        return [
          ...prevList,
          { id: number, value: userInput, color: getRandomColor() },
        ];
      } else {
        return prevList;
      }
    });
  }

  function getRandomColor() {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  }

  function showAlertBox() {
    return isCreateBtnIsClicked && toDoList.length >= 1;
  }

  return (
    <div className="list-maker-container">
      <div className="list-maker-header">
        <h1>To-Do List</h1>
      </div>
      <Navigation />
      {<InputField btnClick={btnClick} />}
      {isCreateBtnIsClicked ? null : <ItemList />}

      {showAlertBox() && <SaveAlert />}
    </div>
  );
}

export default ListMaker;
