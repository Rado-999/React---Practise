import React from "react";

function CreateList() {
  return (
    <div className="create-list-alert-container">
      <h6 className="create-list-alert-header">Enter a name of List</h6>
      <input className="create-list-alert-input" type="text"></input>
      <button className="create-list-alert-create-btn">Create</button>
    </div>
  );
}

export default CreateList;
