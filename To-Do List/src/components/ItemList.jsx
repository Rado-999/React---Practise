import React from "react";
import Item from "./Item";

function ItemList({ toDoList, onItemDelete }) {
  return (
    <ul>
      {toDoList.map((item,index) => (
        <Item
          key={item.id}
          index = {index+1}
          item={item}
          onItemDelete={onItemDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList;
