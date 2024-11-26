import React from "react";

function SaveAlert(){
    return (
        <div className="save-alert-container">
            <div className="save-alert">
                <p className="save-alert-header">The list "kasdjklasjdsakldjlk" <span>has unsaved changes</span></p>
                <p className="save-alert-question">Do you want to save these changes?</p>
                <div className="save-alert-buttons">
                    <button className="save-btn">Save</button>
                    <button className="dont-save-btn">Dont' Save</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default SaveAlert