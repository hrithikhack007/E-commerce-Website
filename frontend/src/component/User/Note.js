import React from "react";
import { Typography } from "@material-ui/core";
import "./Note.css";
const Note = () => {
  return (
    <>
      <div className="noteContainer">
        <div className="noteBox">
          <p className="noteHeading">Note</p>
          <div className="noteMessage">
            <p>Your Profile Image while registering should not exceed 750kb</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
