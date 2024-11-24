import React, { useState } from "react";
import ItemList from "./ItemList";
import InputField from "./InputField";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setuserInput] = useState("");
  const [number,setNumber] = useState(0)

  function handleUserInput(e) {
    const inputValue = e.target.value;
    setuserInput(inputValue);
  }

  function btnClick(input) {
    if (!input || input.length < 3) {
      return;
    }
    setToDoList((prevList) => {
      const itemsToLowerCase = prevList.map((item) => item.value.toLowerCase());
      if (!itemsToLowerCase.includes(userInput.toLowerCase())) {
        setNumber(number+1)
        return [...prevList, {id:number,value:userInput,color:getRandomColor()}];
      }
      else{
        return prevList
      }
    });
    setuserInput("");
  }

  function onItemDelete(index) {
    setToDoList((prevList) => [...prevList.filter((item) => item.id !== index)]);
  }

  function getRandomColor(){
    return ("#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0"))
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputField
        btnClick={btnClick}
        handleUserInput={handleUserInput}
        userInput={userInput}
      />
      <ItemList onItemDelete={onItemDelete} toDoList={toDoList} />
    </div>
  );
}

export default App;
