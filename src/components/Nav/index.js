import React from "react";
import { Link } from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css";

const Navigation = () => {

  return (
    <div>
      <Nav className="justify-content-center" id="top-nav">
        <NavItem className="nav-item">
          <NavLink className="nav-link" tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" tag={Link} to="/about">About Me</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" tag={Link} to="/portfolio">My Work</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink className="nav-link" tag={Link} to="/contact">Contact Me</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Navigation;