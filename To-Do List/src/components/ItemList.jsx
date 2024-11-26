import React, { useContext } from "react";
import Item from "./Item";
import AppContext from "./Context/AppContext";

function ItemList() {
  const {toDoList, setToDoList} = useContext(AppContext)

  function onItemDelete(index) {
    setToDoList((prevList) => [
      ...prevList.filter((item) => item.id !== index),
    ]);
  }

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
