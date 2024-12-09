import AppContext from "./AppContext";
import React, {useEffect, useState } from "react";

const AppProvider = ({ children }) => {
  const [listsCollection, setListCollection] = useState([]);
  const [createBtnIsClicked, setCreateBtnIsClicked] = useState(false);
  const [deleteListBtnIsClicked, setDeleteListBtnIsClicked] = useState(false);
  const [currentList, setCurrentList] = useState({ tasks: [] });
  const [collectionID, setCollectionID] = useState(1);

  useEffect(() => {
    setListCollection((prevState) => {
      const currentListIndexInListCollection = prevState.findIndex((list)=> list.listName === currentList.listName);
      let updatedListCollection = prevState;
      updatedListCollection[currentListIndexInListCollection] = currentList;
      return updatedListCollection;
    });
  }, [currentList]);



  const context = {
    listsCollection: listsCollection,
    setListCollection: setListCollection,
    createBtnIsClicked: createBtnIsClicked,
    setCreateBtnIsClicked: setCreateBtnIsClicked,
    deleteListBtnIsClicked: deleteListBtnIsClicked,
    setDeleteListBtnIsClicked: setDeleteListBtnIsClicked,
    currentList: currentList,
    setCurrentList: setCurrentList,
    collectionID: collectionID,
    setCollectionID: setCollectionID,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
