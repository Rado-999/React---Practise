import AppContext from "./AppContext";
import React, { useState } from "react";

const AppProvider = ({ children }) => {
  const [listCollection, setListCollection] = useState([]);
  const [showSaveAlert, setShowSaveAlert] = useState(false);
  const [collectionId, setCollectionId] = useState(1);
  const [toDoList, setToDoList] = useState([]);
  const [userInput, setuserInput] = useState("");
  const [isCreateBtnIsClicked, setIsCreateBtnIsClicked] = useState(false);
  const [showPreviousLists, setShowPreviousLists] = useState(false);
  const [currentList, setCurrentList] = useState();
  const [isSaved,setIsSaved] = useState(true)
  const [previousItemIsClicked , setPreviousItemIsClicked] = useState(false)

  function handleSaveListBtn(){
    if (showSaveAlert){
      setShowSaveAlert(false)
      if (!previousItemIsClicked){
        setIsCreateBtnIsClicked(true)
      }
    }
    setIsSaved(true)
    console.log(currentList)
    setListCollection((prevState)=>{
      const obj = prevState.find((list) => list.id === currentList.id);
      const objIndex = prevState.indexOf(obj)
      prevState[objIndex] = currentList
      return prevState
    })
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
    handleSaveListBtn:handleSaveListBtn,
    isSaved:isSaved,
    setIsSaved:setIsSaved,
    setPreviousItemIsClicked:setPreviousItemIsClicked,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
