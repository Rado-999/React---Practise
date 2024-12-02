import React from "react";
import ListMaker from "./ListMaker";
import AppProvider from "./Context/AppProvider";
import PreviousLists from "./PreviousLists";

function App() {
  return (
    <AppProvider>
      <div className="app-container">
        <ListMaker />
        <PreviousLists />
      </div>
    </AppProvider>
  );
}

export default App;
