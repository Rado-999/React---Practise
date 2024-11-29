import React from "react";
import ViewPreviousLists from "./ViewPreviousLists";
import CreateListButton from "./CreateListButton";

function Navigation() {

  return (
    <div className="navigation-bar">
      <CreateListButton />
      <ViewPreviousLists />
    </div>
  );
}

export default Navigation;
