import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SettingsIcon from "@material-ui/icons/Settings";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Confirm from "../extraDesignComponents/confirm";
import SelectMembership from "../selectComponent/selectMembership";

// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import authReducer from "../../reducers/authReducer";

import {
  getUserProfile,
  updateBaseUserProfile,
  updateCustomUserProfile,
  cancelProfileChanges,
} from "../../actions/profileActions";

import { Link, Redirect } from "react-router-dom";

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

function changeProfileSettings(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.profile != null || props.profile != undefined) {
      change();
    }
  }, [props.profile]);

  useEffect(() => {
    props.getUserProfile();
  }, []);

  // useEffect(() => {
  //   console.log(props.user_info_immutable);
  //   console.log(props.profile);
  // }, [props.user_info_immutable, props.profile]);

  const [first_name, setFirstName] = useState(
    props.user_info_immutable === undefined ||
      props.user_info_immutable === null
      ? ""
      : props.user_info_immutable.first_name
  );
  const [last_name, setLastName] = useState(
    props.user_info_immutable === undefined ||
      props.user_info_immutable === null
      ? ""
      : props.user_info_immutable.last_name
  );
  // const [email_address, setEmailAddress] = useState(
  //   props.user_info_immutable === undefined ||
  //     props.user_info_immutable === null
  //     ? ""
  //     : props.user_info_immutable.email
  // );
  const primary_email_address =
    props.user_info_immutable === undefined ||
    props.user_info_immutable === null
      ? ""
      : props.user_info_immutable.email;

  const [membership_plan, setMembershipPlan] = useState(
    props.profile === undefined || props.profile === null
      ? ""
      : props.profile.membership_plan
  );

  const [secondary_email_address, setSecondaryEmailAddress] = useState(
    props.profile === undefined || props.profile === null
      ? ""
      : props.profile.secondary_email
  );

  const [phone, setPhone] = useState(
    props.profile === undefined || props.profile === null
      ? ""
      : props.profile.phone_number
  );

  // const [employee_count, setEmployeeCount] = useState("");
  // const [office_address, setOfficeAddress] = useState("");

  const [organization, setOrganization] = useState("");

  const [employee_count, setEmployeeCount] = useState(
    props.profile === undefined || props.profile === null
      ? ""
      : props.profile.employee_count
  );

  const [office_address, setOfficeAddress] = useState(
    props.profile === undefined || props.profile === null
      ? ""
      : props.profile.office_address
  );

  // const [current_password, setCurrentPassword] = useState("");
  // const [new_password, setNewPassword] = useState("");
  // const [confirm_new_password, setConfirmNewPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleSecondaryEmailAddressChange = (e) => {
    setSecondaryEmailAddress(e.target.value);
  };
  // const handleCurrentPasswordChange = (e) => {
  //   setCurrentPassword(e.target.value);
  // };
  // const handleNewPasswordChange = (e) => {
  //   setNewPassword(e.target.value);
  // };
  // const handleConfirmNewPasswordChange = (e) => {
  //   setConfirmNewPassword(e.target.value);
  // };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };
  const handleEmployeeCountChange = (e) => {
    setEmployeeCount(e.target.value);
  };
  const handleOfficeAddressChange = (e) => {
    setOfficeAddress(e.target.value);
  };

  // const handlePromotionChange = e => {
  //   if (promotion === 0) {
  //     setPromotion(1);
  //   } else {
  //     setPromotion(0);
  //   }
  // };

  function change() {
    // the method is called when the props are received, otherwise it gives error of null and undefined
    // and if there is any prop that was not filled by a user, in real this time, so it will be shown as null. If it is null assign that field empty "".
    setEmployeeCount(
      props.profile === null ? "" : props.profile.employee_count
    );
    setOfficeAddress(
      props.profile === null ? "" : props.profile.office_address
    );
    setOrganization(props.profile === null ? "" : props.profile.organization);
    setSecondaryEmailAddress(
      props.profile === null ? "" : props.profile.secondary_email
    );
    setMembershipPlan(
      props.profile === null ? "" : props.profile.membership_plan
    );
    setPhone(props.profile === null ? "" : props.profile.phone_number);
  }

  // const handleCancelChanges = (e) => {
  //   console.log("Changes Canceled!");
  //   return <Redirect to="/Positions" />;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user_id = props.profile.user;
    console.log(first_name);
    console.log(last_name);
    console.log(secondary_email_address);
    console.log(organization);
    console.log(employee_count);
    console.log(office_address);
    console.log(phone);

    let profile_obj = {
      secondary_email: secondary_email_address,
      organization: organization,
      employee_count: employee_count,
      office_address: office_address,
      phone_number: phone,
    };

    props.updateBaseUserProfile(first_name, last_name, user_id);
    props.updateCustomUserProfile(profile_obj, user_id);
    console.log("Profile Changes Made");
    // console.log(email_address); It is readonly
    // console.log(membership_plan); It is readonly

    // console.log(current_password); It is set through a link
    // console.log(new_password);
    // console.log(confirm_new_password);

    // if (new_password !== confirm_new_password) {
    //   console.log("Passwords do not match");
    // } else {
    //   console.log("Changes Saved! [not to db]");
    // }
  };

  return (
    <div style={{ minHeight: "900px" }} id="pageContainer">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <SettingsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Profile Settings
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  value={first_name}
                  onChange={handleFirstNameChange}
                  autoComplete="first_name"
                  name="first_name"
                  variant="outlined"
                  fullWidth
                  id="first_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  value={last_name}
                  onChange={handleLastNameChange}
                  variant="outlined"
                  fullWidth
                  id="last_name"
                  name="last_name"
                  autoComplete="last_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Primary Email Address (Read-only)"
                  // value={email_address}
                  // onChange={handleEmailAddressChange}

                  // defaultValue="Hello World"
                  defaultValue={primary_email_address}
                  variant="outlined"
                  fullWidth
                  id="primary_email_address"
                  name="primary_email_address"
                  // autoComplete="primary_email_address"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Secondary Email Address"
                  value={secondary_email_address}
                  onChange={handleSecondaryEmailAddressChange}
                  variant="outlined"
                  fullWidth
                  id="secondary_email_address"
                  name="secondary_email_address"
                  autoComplete="secondary_email_address"
                />
              </Grid>
              <Grid item xs={12}>
                <a
                  href="reset_password/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Want to Change Your Password? Click Here to Reset It
                </a>
                {/* add here the link to reset */}
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  label="Current Password"
                  value={current_password}
                  onChange={handleCurrentPasswordChange}
                  variant="outlined"
                  fullWidth
                  name="current_password"
                  type="current_password"
                  id="current_password"
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  label="New Password"
                  value={new_password}
                  onChange={handleNewPasswordChange}
                  variant="outlined"
                  fullWidth
                  name="new_password"
                  type="new_password"
                  id="new_password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  value={confirm_new_password}
                  onChange={handleConfirmNewPasswordChange}
                  variant="outlined"
                  fullWidth
                  name="confirm_new_password"
                  type="confirm_new_password"
                  id="confirm_new_password"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  value={phone}
                  onChange={handlePhoneChange}
                  variant="outlined"
                  fullWidth
                  name="phone"
                  type="TextField"
                  id="phone"
                  // multiline
                  // rows="3"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Membership Plan (Read-only)"
                  value={membership_plan}
                  // value={email_address}
                  // onChange={handleEmailAddressChange}

                  // defaultValue="Hello World"
                  // defaultValue={membership_plan}
                  variant="outlined"
                  fullWidth
                  id="membership_plan"
                  name="membership_plan"
                  // autoComplete="membership_plan"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Organization"
                  value={organization}
                  onChange={handleOrganizationChange}
                  variant="outlined"
                  fullWidth
                  name="organization"
                  type="TextField"
                  id="organization"
                  multiline
                  rows="3"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Employee Count"
                  type="number"
                  InputProps={{
                    inputProps: {
                      max: 2000,
                      min: 1,
                    },
                  }}
                  value={employee_count}
                  onChange={handleEmployeeCountChange}
                  variant="outlined"
                  fullWidth
                  name="employee_count"
                  id="employee_count"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Office Address"
                  value={office_address}
                  onChange={handleOfficeAddressChange}
                  variant="outlined"
                  fullWidth
                  name="office_address"
                  type="TextField"
                  id="office_address"
                  multiline
                  rows="3"
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save Changes
                </Button>
              </Grid>
              <Grid item xs>
                <Button
                  // onClick={handleCancelChanges}
                  onClick={() => {
                    props.cancelProfileChanges();
                  }}
                  component={Link}
                  to="/Positions"
                  // type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Cancel Changes
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

changeProfileSettings.propTypes = {
  //   user_info_immutable: PropTypes.object.isRequired,
  getUserProfile: PropTypes.func.isRequired,
  updateBaseUserProfile: PropTypes.func.isRequired,
  updateCustomUserProfile: PropTypes.func.isRequired,
  cancelProfileChanges: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user_info_immutable: state.authReducer.user,
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, {
  getUserProfile,
  updateBaseUserProfile,
  updateCustomUserProfile,
  cancelProfileChanges,
})(changeProfileSettings);
