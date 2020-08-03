import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../../styles/header.css";
import AvatarMenu from "../avatarMenuComponent/avatarMenu";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

import { Typography } from "@material-ui/core";

class Header extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const guestLinks = (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="myNav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/SignIn">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/SignUp">
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Interview">
              Interview
            </NavLink>
          </li>
        </ul>
      </div>
    );

    const authLinks = (
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0" id="myNav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Homepage">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Positions">
              Pending Job Positions
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Junkyard">
              Junkyard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/HelpMenu">
              Get Help!
            </NavLink>
          </li>
        </ul>
        <div className="navbar-text my-2 my-lg-0 pr-1">
          <strong style={{ color: "white" }}>
            {user ? `${user.email}` : ""}
          </strong>
        </div>
        <AvatarMenu />
      </div>
    );

    return (
      <nav
        id="nw-header"
        className="navbar sticky-top navbar-expand-lg navbar-dark"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand"
          style={{
            color: "#E4AB2E",
            border: "1px solid #E4AB2E",
            padding: "7px",
          }}
        >
          <Typography variant="h6">AI Assistant Recruiter</Typography>
        </a>

        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(Header);
