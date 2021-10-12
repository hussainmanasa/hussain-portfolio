import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import ResumeData from "../../utils/ResumeData";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-left">
        <Typography className="footer-name">{ResumeData.name}</Typography>
      </div> */}
      <div className="footer-right">
        <Typography className="footer-copyright">
          &copy; Developed by Hussain Manasawala
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
