import React, { useContext} from "react";
import AppContext from "./Context/AppContext";

function ViewPreviousLists (){
    const {showPreviousLists, setShowPreviousLists}= useContext(AppContext)

    function onViewPreviousLists(){
        setShowPreviousLists(!showPreviousLists)
    }

    return (
        <button onClick={onViewPreviousLists}>
            PreviousLists
        </button>
    )
}

export default ViewPreviousLists