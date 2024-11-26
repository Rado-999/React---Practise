import React, { useContext } from "react";
import AppContext from "./Context/AppContext";

function PreviousLists() {
  const { showPreviousLists } = useContext(AppContext);
  if (showPreviousLists) {
    return (
      <div className="previous-lists-container">
        <ul className="previous-lists">
          <li className="previous-lists-list-item">
            <span>Bibliophile-friendly</span>
          </li>
          <li className="previous-lists-list-item">
            <span>List 2</span>
          </li>
          <li className="previous-lists-list-item">
            <span>List 3</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default PreviousLists;
