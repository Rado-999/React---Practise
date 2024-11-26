import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import SaveAlert from "./SaveAlert";
import InputField from "./InputField";
import ItemList from "./ItemList";
import AppContext from "./Context/AppContext";

function ListMaker() {
  const [number,setNumber] = useState(1)
  // const [toDoList, setToDoList] = useState([])

  const {
    toDoList,
    setToDoList,
    isCreateBtnIsClicked,
  } = useContext(AppContext);

  function btnClick(userInput) {
    const input = userInput
    if (!input || input.length < 3) {
      return;
    }
    setToDoList((prevList) => {
      const itemsToLowerCase = prevList.map((item) => item.value.toLowerCase());
      if (!itemsToLowerCase.includes(userInput.toLowerCase())) {
        setNumber(number+1)
        return [
          ...prevList,
          {id:number,value: userInput, color: getRandomColor() },
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
    <div className="app">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <Navigation />
        {<InputField btnClick={btnClick} />}
        {isCreateBtnIsClicked ? null : <ItemList />}

        {showAlertBox() && <SaveAlert />}
      </div>
      <div className="other-lists">
        <ul>
          <li className="">List 1</li>
          <li>List 2</li>
          <li>List 3</li>
        </ul>
      </div>
    </div>
  );
}

export default ListMaker;
