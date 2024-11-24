function InputField({ btnClick, userInput, handleUserInput }) {
  return (
    <div className="form">
      <input type="text" value={userInput} onChange={handleUserInput} />
      <button onClick={() => btnClick(userInput)}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputField;
