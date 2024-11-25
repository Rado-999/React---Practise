import React from "react";
import ViewPreviousLists from "./ViewPreviousLists";
import CreateNewList from "./CreateNewList";

function Navigation({ isCreateBtnIsClicked, setIsCreateBtnIsClicked ,toDoList }) {
  return (
    <div className="navigation-bar">
      <CreateNewList
        isCreateBtnIsClicked={isCreateBtnIsClicked}
        setIsCreateBtnIsClicked={setIsCreateBtnIsClicked}
        toDoList = {toDoList}
      />
      <ViewPreviousLists />
    </div>
  );
}

export default Navigation;
