import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";

import SignUpBackgroundImage from "../../../../assets/img/Background/Optimized_Backgrounds/TeamBackground.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/About">
        AI Assistant Recruiter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const classes = useStyles();

  const [user_name, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email_address, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [updates_and_promotions, setUpdatesAndPromotions] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleUpdatesAndPromotionsChange = (e) => {
    setUpdatesAndPromotions(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(updates_and_promotions);

    if (password !== password_confirm) {
      console.log("Passwords do not match");
    } else {
      // var username = first_name; //must conform with authActtion register method //previously I was saving first name as username but it was wrong

      // var username = user_name; //must conform with authActtion register method

      // var email = email_address;

      // const newUser = {
      //   username,
      //   password,
      //   email,
      // };
      // props.register(newUser);
      props.register(
        user_name,
        password,
        email_address,
        first_name,
        last_name,
        updates_and_promotions
      );
      console.log("New user created");
      return <Redirect to="/SignIn" />;
    }
  };

  if (props.isAuthenticated) {
    return <Redirect to="/Positions" />;
  }
  return (
    <div
      style={{
        minHeight: "700px",

        backgroundImage: `url(${SignUpBackgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "5%",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundColor: "white", //you may add a background picture here
          borderRadius: "20px",
          padding: "20px 40px",
          opacity: "0.8",
        }}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={first_name}
                  onChange={handleFirstNameChange}
                  autoComplete="first_name"
                  name="first_name"
                  variant="outlined"
                  // required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={last_name}
                  onChange={handleLastNameChange}
                  variant="outlined"
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="last_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={user_name}
                  onChange={handleUserNameChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="user_name"
                  label="Username"
                  name="user_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email_address}
                  onChange={handleEmailAddressChange}
                  variant="outlined"
                  // required
                  fullWidth
                  id="email_address"
                  label="Email Address"
                  name="email_address"
                  autoComplete="email_address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={handlePasswordChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password_confirm}
                  onChange={handlePasswordConfirmChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password_confirm"
                  label="Confirm Password"
                  type="password"
                  id="password_confirm"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={updates_and_promotions}
                      onChange={handleUpdatesAndPromotionsChange}
                      name="updates_and_promotions"
                      color="primary"
                    />
                  }
                  label="I want to receive marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignUp);
