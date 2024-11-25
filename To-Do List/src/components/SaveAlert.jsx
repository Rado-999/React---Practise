import React from "react";

function SaveAlert(){
    return (
        <div className="save-alert-container">
            <div className="save-alert">
                <p className="save-alert-header">The list "kasdjklasjdsakldjlk" <span>has unsaved changes</span></p>
                <p className="save-alert-question">Do you want to save these changes?</p>
                <div className="save-alert-buttons">
                    <button className="save-btn"><span>Save</span></button>
                    <button className="don't-save-btn"><span>Dont' Save</span></button>
                    <button className="cancel-btn"><span>Cancel</span></button>
                </div>
            </div>
        </div>
    )
}

export default SaveAlert