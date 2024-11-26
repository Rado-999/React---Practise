import React from "react";
import ListMaker from "./ListMaker";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <AppProvider>
      <ListMaker />
    </AppProvider>
  );
}

export default App;
