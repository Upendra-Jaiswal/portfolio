import React from "react";
import classes from "./socials.module.css";
import Socials from "./Socials";
import { Directions } from "@mui/icons-material";

const Sociallinks = () => {
  return (
    <div className={classes.relative}>
      <Socials />
    </div>
  );
};

export default Sociallinks;

// style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "50vh",
//     overflow: "hidden",
//   }}
