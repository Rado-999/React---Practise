import AppContext from "./AppContext";
import React from "react";

const AppProvider = ({ children }) => {
  const context = {
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
