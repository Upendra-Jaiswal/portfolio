import React from "react";
import classes from "./footer.module.css";

import { MDBFooter } from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <div className={classes.relative}>
      <MDBFooter
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        bgColor="light"
        className="text-center text-lg-left"
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()}
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
