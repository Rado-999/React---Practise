import AppContext from "./AppContext";
import React, { useState, useEffect } from "react";

const AppProvider = ({ children }) => {
  const [listCollection, setListCollection] = useState([]);
  const [showSaveAlert, setShowSaveAlert] = useState(false);
  const [collectionId, setCollectionId] = useState(1);
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setuserInput] = useState("");
  const [proceedAfterSave, setProceedAfterSave] = useState(false);
  const [isCreateBtnIsClicked, setIsCreateBtnIsClicked] = useState(false);
  const [showPreviousLists, setShowPreviousLists] = useState(false);
  const [currentList, setCurrentList] = useState();
  const [isSaved, setIsSaved] = useState(true);
  const [nextList, setNextList] = useState(null);

  function handleSaveListBtn() {
    setIsSaved(true);
    setShowSaveAlert(false);
    if (nextList) {
      setCurrentList(nextList);
      setNextList(null);
    }
    setListCollection((prevCollection) => {
      const listIndex = prevCollection.findIndex(
        (list) => list.id === currentList.id
      );
      const updatedCollection = prevCollection;
      updatedCollection[listIndex] = currentList;
      return updatedCollection;
    });

    if (proceedAfterSave) {
      setProceedAfterSave(false)
      setIsCreateBtnIsClicked(true)
    }
  }

  const context = {
    userInput: userInput,
    setuserInput: setuserInput,
    toDoList: toDoList,
    setToDoList: setToDoList,
    isCreateBtnIsClicked: isCreateBtnIsClicked,
    setIsCreateBtnIsClicked: setIsCreateBtnIsClicked,
    showPreviousLists: showPreviousLists,
    setShowPreviousLists: setShowPreviousLists,
    listCollection: listCollection,
    setListCollection: setListCollection,
    showSaveAlert: showSaveAlert,
    setShowSaveAlert: setShowSaveAlert,
    collectionId: collectionId,
    setCollectionId: setCollectionId,
    currentList: currentList,
    setCurrentList: setCurrentList,
    isListCollecionEmpty: listCollection.length === 0,
    handleSaveListBtn: handleSaveListBtn,
    isSaved: isSaved,
    setIsSaved: setIsSaved,
    setNextList: setNextList,
    proceedAfterSave: proceedAfterSave,
    setProceedAfterSave: setProceedAfterSave,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
