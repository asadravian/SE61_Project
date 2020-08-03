import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmail } from "../../actions/emailActions";
import { sendSMS, sendWhatsAppMessage } from "../../actions/smsActions";

import FullScreenEmailDialog from "./customEmail";

// export default function EmailMenu() {
function EmailMenu(props) {
  const [openCustomEmailDialog, setOpenCustomEmailDialog] = React.useState(
    false
  );

  const handleClickOpenForCustomEmailDialog = () => {
    setOpenCustomEmailDialog(true);
  };
  const handleCloseForCustomEmailDialog = () => {
    handleClose(); // close the email menu
    setOpenCustomEmailDialog(false); // close the custom email dialog
  };

  const handleCustomEmail = () => {
    handleClickOpenForCustomEmailDialog(); //open custom email dialog
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEmail = () => {
    handleClose();
    console.log("Sending Email");
    props.sendEmail();
  };

  const handleWhatsApp = () => {
    handleClose();
    console.log("Sending WhatsApp");
    props.sendWhatsAppMessage();
  };

  const handleSMS = () => {
    handleClose();
    console.log("Sending SMS");
    props.sendSMS();
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained" // adds the button look and I don't want it
        color="primary"
        size="small"
        onClick={handleClick}
      >
        Invite
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleEmail}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Automated Email" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleCustomEmail}>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Custom Email" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleSMS}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Automated SMS" />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleWhatsApp}>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Automated WhatsApp" />
        </StyledMenuItem>
      </StyledMenu>
      <FullScreenEmailDialog
        openCustomEmailDialog={openCustomEmailDialog}
        closeCustomEmailDialog={handleCloseForCustomEmailDialog}
      />
    </div>
  );
}

EmailMenu.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  sendSMS: PropTypes.func.isRequired,
  sendWhatsAppMessage: PropTypes.func.isRequired,
};

export default connect(null, { sendEmail, sendSMS, sendWhatsAppMessage })(
  EmailMenu
);
