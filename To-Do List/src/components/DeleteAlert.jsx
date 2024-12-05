import React from "react";

function DeleteAlert() {
  return (
    <div className="alert-container">
      <div className="alert">
        <p className="alert-header">
          Are you sure you want to delete "" list
        </p>
        <p className="alert-question">Please Confirm</p>
        <div className="alert-buttons">
          <button className="dont-save-btn">Confirm</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAlert
