import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer container-shadow">
      {/* <div className="footer-left">
        <Typography className="footer-name">{ResumeData.name}</Typography>
      </div> */}
      <div className="footer-right">
        <Typography variant="body2" className="footer-copyright">
          &copy; Developed by Hussain Manasawala
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
