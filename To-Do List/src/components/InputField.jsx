import { useContext } from "react";
import AppContext from "./Context/AppContext";

function InputField({btnClick}) {
  const {
    userInput,
    setuserInput,
  } = useContext(AppContext);

  function handleUserInput(e) {
    const inputValue = e.target.value;
    setuserInput(inputValue);
  }

  function addBtnIsClicked(){
    btnClick(userInput)
    setuserInput('')
  }


  return (
    <div className="form">
      <input type="text" value={userInput} onChange={handleUserInput} />
      <button onClick={addBtnIsClicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputField;
