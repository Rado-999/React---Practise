import React from "react";

function DeleteAlert() {
  return (
    <div className="delete-container">
      <h2 className="delete-header">Are you sure?</h2>
      <p className="delete-alert">You will not be able to recover this list</p>
      <span className="delete-list-name">Shopping</span>
      <button className="delete-button">Delete</button>
    </div>
  );
}

export default DeleteAlert;
