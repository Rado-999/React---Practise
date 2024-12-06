import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = ({ children }) => {
  const [listsCollection, setListCollection] = useState(['asd'])
  const [createBtnIsClicked ,setCreateBtnIsClicked] = useState(false)
  const [showSaveAlert, setShowSaveAlert] = useState(false)
  const [isSaved, setIsSaved] = useState(true)
  const [itemID, setItemID] = useState(0)


  const context = {
    listsCollection:listsCollection,
    setListCollection:setListCollection,
    createBtnIsClicked:createBtnIsClicked,
    setCreateBtnIsClicked:setCreateBtnIsClicked,
    showSaveAlert:showSaveAlert,
    setShowSaveAlert:setShowSaveAlert,
    isSaved:isSaved,
    setIsSaved:setIsSaved,
    itemID:itemID,
    setItemID:setItemID,
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
