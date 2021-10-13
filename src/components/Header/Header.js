import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, withRouter } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ResumeData from "../../utils/ResumeData";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* HomePage */}
      <Nav.Link as={NavLink} to="/" className="header-home-brand">
        <Navbar.Brand className="header-home">
          <HomeIcon sx={{ color: "primary.icon" }} />
        </Navbar.Brand>
      </Nav.Link>
      <div className="header-right">
        {Object.keys(ResumeData.socials).map((key) => (
          <a key={key} href={ResumeData.socials[key].link} target="_blank">
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
            to="/"
            className={pathName == "/" ? "header-link-active" : "header-link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header-link-active" : "header-link"
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
