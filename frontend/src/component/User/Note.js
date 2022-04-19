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
            <p>
              When you clicked on the link from Navbar make sure to close it by
              clicking on cross on top left side of page to view the page
            </p>
            <p>Have a wonderful Shopping experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Note;
