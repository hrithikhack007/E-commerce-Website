import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = ({ history }) => {
  return (
    <>
      {window.location.pathname === "/process/payment" ? (
        <>
          <div id="paymentBug">
            <Typography className="heading">Sorry For Inconvenience</Typography>
            <p className="message">
              Please refresh the page once, in case you are proceeding for
              Payment.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="PageNotFound">
            <ErrorIcon />

            <Typography>Page Not Found </Typography>
            <Link to="/">Home</Link>
          </div>
        </>
      )}
    </>
  );
};

export default NotFound;
