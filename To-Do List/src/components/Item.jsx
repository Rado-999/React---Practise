import React, { useState } from "react";
import DeleteBtn from "./DeleteBtn";

function Item({ index, item, onItemDelete }) {
  const [isDone, setIsDone] = useState(false);
  item.isDone = isDone;

  function lineThroughItem() {
    setIsDone(!isDone);
  }

  return (
    <li>
      <span onClick={lineThroughItem}>
        <span className="task-id">{index}.</span>
        <span
          className={item.isDone ? "line-throught-item" : ""}
          style={{ color: item.color }}
        >
          {item.value}
        </span>
      </span>
      {item.isDone && <DeleteBtn onItemDelete={onItemDelete} id={item.id} />}
    </li>
  );
}

export default Item;