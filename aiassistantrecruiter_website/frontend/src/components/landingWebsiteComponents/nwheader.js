import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";

import "../../styles/nwheader.css";

class Header extends Component {
  render() {
    return (
      <header>
        <ul id="nw-header" className="nav">
          <span
            className="d-inline-block align-top navbar-text"
            style={{
              color: "white",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            AI Assistant Recruiter
          </span>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              MEET THE TEAM
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              FEATURES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              PLANS AND PRICING
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTRIBUTE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT US
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/WebsiteSignin">
              SIGN IN
            </NavLink>
          </li>
          <li style={{ float: "right" }} className="nav-item">
            <NavLink className="nav-link" to="/WebsiteSignup">
              SIGN UP
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
