import React, { useContext } from "react";
import Item from "./Item";
import AppContext from "./Context/AppContext";
import SaveAlert from "./SaveAlert";

function ItemList() {
  const {
    currentList,
    setCurrentList,
    showSaveAlert,
    setListCollection,
    listCollection,
    setIsSaved
  } = useContext(AppContext);
  const items = currentList["listItems"];

  function onItemDelete(id) {
    setIsSaved(false)
    setCurrentList((prevList) => ({
      ...prevList,
      listItems: items.filter((item) => item.id !== id),
    }));
  }

  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <Item
            key={item.id}
            index={index + 1}
            item={item}
            onItemDelete={onItemDelete}
          />
        ))}
      </ul>
      {showSaveAlert}
    </div>
  );
}

export default ItemList;
