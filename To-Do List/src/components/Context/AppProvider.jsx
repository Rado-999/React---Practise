import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = ({ children }) => {
  const [listsCollection, setListCollection] = useState(['asd'])
  const [createBtnIsClicked ,setCreateBtnIsClicked] = useState(false)
  const [isSaved, setIsSaved] = useState(true)
  const [itemID, setItemID] = useState(0)
  const [deleteBtnIsClicked, setDeleteBtnIsClicked] = useState(false)
  const [currentList,setCurrentList] = useState({tasks:[]})


  const context = {
    listsCollection:listsCollection,
    setListCollection:setListCollection,
    createBtnIsClicked:createBtnIsClicked,
    setCreateBtnIsClicked:setCreateBtnIsClicked,
    isSaved:isSaved,
    setIsSaved:setIsSaved,
    itemID:itemID,
    setItemID:setItemID,
    deleteBtnIsClicked:deleteBtnIsClicked,
    setDeleteBtnIsClicked:setDeleteBtnIsClicked,
    currentList:currentList,
    setCurrentList:setCurrentList,
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
