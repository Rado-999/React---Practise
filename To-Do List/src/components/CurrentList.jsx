import React, { useContext } from "react";
import AppContext from "./Context/AppContext";
import ToDoItem from "./ToDoItem";

function CurrentList() {
  const { currentList,setCurrentList} = useContext(AppContext);

    function deleteTask (taskID) {
        setCurrentList((prevState)=>({
            ...prevState,
            tasks:prevState['tasks'].filter((task)=> task.taskID !== taskID)
        }))
    }

  return (
    <div className="current-list-container">
      {currentList["tasks"].map((task, index) => (
        <ToDoItem deleteTask= {deleteTask} key={task.taskID} taskInfo={task} number={index + 1} />
      ))}
    </div>
  );
}

export default CurrentList;
