import React, { useState } from "react";

function ToDoItem(){
    const [isDone,setIsDone] = useState()

    return (
        <div className="todo-item-container">
            <span className="todo-item-number">1</span>
            <p className="todo-item">Go to the gym</p>
            <button className="todo-delete">Delete</button>
        </div>
    )
}

export default ToDoItem