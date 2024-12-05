import React, { useState } from "react";

function ToDoItem(){
    const [isDone,setIsDone] = useState()

    return (
        <div className="to-do-item-container">
            <span className="to-do-item-number"></span>
            <p className="to-do-item"></p>
            {isDone && <button>Delete</button>}
        </div>
    )
}

export default ToDoItem