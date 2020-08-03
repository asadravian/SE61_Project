import React, { Component } from "react";
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

import Homepage from "../pages/homePage";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        AI Assistant Recruiter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    backgroundColor: "white",
    borderRadius: "10px",
  },
}));

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;

    return (
      <div
        className="container-fluid"
        style={{
          minHeight: "700px",
          backgroundColor: "#EBEDFF",
          backgroundImage:
            "linear-gradient( 111.6deg,  rgba(73,235,221,1) -0%, rgba(83,222,219,1) 7.1%, rgba(105,191,217,1) 13.4%, rgba(127,157,214,1) 18%, rgba(155,113,208,1) 23.9%, rgba(178,73,201,1) 28.8%, rgba(200,45,192,1) 33.3%, rgba(213,42,180,1) 38%, rgba(232,44,145,1) 44.2%, rgba(239,45,128,1) 52.4%, rgba(249,66,107,1) 59.7%, rgba(252,105,98,1) 67.3%, rgba(252,105,98,1) 74.4%, rgba(254,145,92,1) 82.2%, rgba(255,189,86,1) 88.2%, rgba(254,227,80,1) 92.8%, rgba(254,248,75,1) 98.4% )",
          padding: "15px",
        }}
        id="pageContainer"
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={this.onSubmit} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                onChange={this.onChange}
                value={username}
                fullWidth
                id="username"
                label="Username"
                name="username"
                type="text"
                autoComplete="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                onChange={this.onChange}
                value={password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                <Link style={{ textDecoration: "none", color: "white" }}>
                  Sign In
                </Link>
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8} pb={1}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(SignIn);
