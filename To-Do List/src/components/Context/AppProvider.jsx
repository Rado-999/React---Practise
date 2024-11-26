import AppContext from "./AppContext";
import React,{useState} from "react";

const AppProvider = ({ children }) => {
    const [toDoList, setToDoList] = useState([]);
    const [userInput, setuserInput] = useState("");
    const [isCreateBtnIsClicked, setIsCreateBtnIsClicked] = useState(false);
    const [showPreviousLists, setShowPreviousLists] = useState(false)
  

    const context = {
        userInput:userInput,
        setuserInput : setuserInput,
        toDoList:toDoList,
        setToDoList:setToDoList,
        isCreateBtnIsClicked:isCreateBtnIsClicked,
        setIsCreateBtnIsClicked:setIsCreateBtnIsClicked,
        showPreviousLists: showPreviousLists,
        setShowPreviousLists: setShowPreviousLists,
    }



  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
