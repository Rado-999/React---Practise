import { useContext } from "react";
import AppContext from "./Context/AppContext";

function InputField() {
  const {
    number,
    setNumber,
    userInput,
    setuserInput,
    setToDoList,
  } = useContext(AppContext);

  function handleUserInput(e) {
    const inputValue = e.target.value;
    setuserInput(inputValue);
  }

  function btnClick(e) {
    const input = userInput
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
    setuserInput("");
  }

  function getRandomColor() {
    return (
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  }

  return (
    <div className="form">
      <input type="text" value={userInput} onChange={handleUserInput} />
      <button onClick={btnClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputField;
