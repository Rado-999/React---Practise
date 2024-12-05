import React from "react";

function ListMenu() {
  return (
    <div className="list-menu-container">
      <div className="list-menu-navigation">
        <button className="list-menu-navigation-button"><span className="list-menu-navigation-create-btn">+</span></button>
        <button className="list-menu-navigation-button"><span className="list-menu-navigation-delete-btn">-</span></button>
      </div>
      <ToDoItemInput />
      <CurrentList />
    </div>
  );
}

export default ListMenu;
