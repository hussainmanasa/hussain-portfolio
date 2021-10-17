import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ResumeData from "../../utils/ResumeData";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* HomePage */}
      <Nav.Link
        as={NavLink}
        to={process.env.PUBLIC_URL + "/"}
        className="header-home-brand"
      >
        <Navbar.Brand className="header-home">
          <HomeIcon sx={{ color: "primary.icon" }} />
        </Navbar.Brand>
      </Nav.Link>
      <div className="header-right">
        {Object.keys(ResumeData.socials).map((key) => (
          <a
            className={ResumeData.socials[key].cssClass}
            key={key}
            href={ResumeData.socials[key].link}
            target="_blank"
            rel="noreferrer"
          >
            {ResumeData.socials[key].icon}
          </a>
        ))}
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header-left">
          {/* Resume link */}
          <Nav.Link
            as={NavLink}
            to={process.env.PUBLIC_URL + "/"}
            className={
              pathName === process.env.PUBLIC_URL + "/"
                ? "header-link-active"
                : "header-link"
            }
          >
            Resume
          </Nav.Link>

          {/* Portfolio link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header-link-active" : "header-link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
