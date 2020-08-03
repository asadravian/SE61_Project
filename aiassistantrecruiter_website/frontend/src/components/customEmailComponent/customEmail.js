import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  form: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "100%", // Fix IE 11 issue.
      display: "flex",
      flexWrap: "wrap",
    },
    padding: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "20%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendCustomEmail } from "../../actions/emailActions";

// export default function FullScreenEmailDialog() {
function FullScreenEmailDialog(props) {
  // the below prop comes from emailMenu.js. We will only need to open it from other component. It can close itself afterwards.
  const { openCustomEmailDialog, closeCustomEmailDialog } = props;

  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleClose = () => {
    closeCustomEmailDialog();
  };

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(subject);
    console.log(body);
    console.log("Sending Custom Email");
    props.sendCustomEmail(email, subject, body);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Write Custom Email
      </Button> */}
      <Dialog
        fullScreen
        open={openCustomEmailDialog}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Write Your Own Custom Email
            </Typography>
            <Button
              autoFocus
              color="inherit"
              type="submit"
              onClick={handleClose}
            >
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullwidth="true"
            id="email"
            name="email"
            label="recipient email"
            placeholder="shaharyar@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            fullwidth="true"
            id="subject"
            name="subject"
            label="email subject"
            placeholder="Interview Call"
            value={subject}
            onChange={handleSubjectChange}
          />
          <TextField
            fullwidth="true"
            id="body"
            name="body"
            label="email body"
            placeholder="Congratulations! You have been shortlisted for the job interview. Shortly, you will be notified about the interview time and venue. All the best!"
            multiline
            rows={12}
            rowsMax={22}
            value={body}
            onChange={handleBodyChange}
          />
          <Grid container justify="center">
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send Email
            </Button>
          </Grid>
        </form>
      </Dialog>
    </div>
  );
}

FullScreenEmailDialog.propTypes = {
  sendCustomEmail: PropTypes.func.isRequired,
  openCustomEmailDialog: PropTypes.bool.isRequired,
  closeCustomEmailDialog: PropTypes.func.isRequired,
};

export default connect(null, { sendCustomEmail })(FullScreenEmailDialog);
