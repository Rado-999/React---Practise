import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function ListFooter() {
    const {handleSaveListBtn} = useContext(AppContext)

  return (
    <div className="footer-buttons">
        <button className="delete-list-btn">Delete</button>
        <button onClick = {handleSaveListBtn} className="save-btn">Save</button>
    </div>
  );
}

export default ListFooter;
