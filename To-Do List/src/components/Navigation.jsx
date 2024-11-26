import React from "react";
import ViewPreviousLists from "./ViewPreviousLists";
import CreateNewList from "./CreateNewList";

function Navigation() {

  return (
    <div className="navigation-bar">
      <CreateNewList/>
      <ViewPreviousLists />
    </div>
  );
}

export default Navigation;
