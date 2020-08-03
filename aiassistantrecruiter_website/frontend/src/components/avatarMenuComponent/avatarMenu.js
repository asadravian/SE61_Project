import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MuiLink from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Settings from "../pages/settings";
import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

const getInitialAlphabet = (name) => {
  var parts = name.split(" ");
  var initials = "A"; // for no reason, I am setting default initial to A but it'll change according to user logged in

  if (parts[0].length > 0 && parts[0] !== "") {
    initials = parts[0][0];
  }

  return initials;
};

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar onClick={handleClick}>
        {getInitialAlphabet(props.auth.user.username)}
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/Settings"
          >
            Profile Settings
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MuiLink
            style={{ textDecoration: "none", color: "black" }}
            onClick={props.logout}
          >
            Logout
          </MuiLink>
        </MenuItem>
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, { logout })(SimpleMenu);
