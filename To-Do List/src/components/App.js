import React from "react";
import AppProvider from "./Context/AppProvider";
import ListContainer from "./ListContainer"
import CollectionsContainer from "./CollectionsContainer"

function App() {
  return (
    <AppProvider>
      <div className="app-container">
          <ListContainer />
          <CollectionsContainer />
      </div>
    </AppProvider>
  );
}

export default App;
