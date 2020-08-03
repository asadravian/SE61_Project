import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import Button from "@material-ui/core/Button";

import CircularProgressMatch from "../extraDesignComponents/circularProgress";

import EmailMenu from "../customEmailComponent/emailMenu";

import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { sendEmail, sendCustomEmail } from "../../actions/emailActions";
import { deleteShortlistedCandidate } from "../../actions/shortlistedCandidatesActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    maxWidth: 600,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

// export default function ComplexGrid(props) {
function ComplexGrid(props) {
  const classes = useStyles();

  //*****************DYNAMIC IMPORT CODE BELOW*****DONT MESS WITH THE COMMENTS INSIDE - THEY ARE FOR WEBPACK*********************//
  const Current_Applicant_CV = props.candidate_resume_path;

  import(
    /* webpackInclude: /\.(pdf|doc|docx)$/ */
    /* webpackMode: "lazy-once" */ `../../../../assets/pdf/${Current_Applicant_CV}`
  );

  //*****************DYNAMIC IMPORT CODE UP*****DONT MESS WITH THE COMMENTS INSIDE - THEY ARE FOR WEBPACK*********************//

  // const handleEmail = () => {
  //   console.log("Sending Email");
  //   props.sendEmail();
  // };

  // const handleCustomEmail = () => {
  //   // Write code for taking userinput and then give below arguments
  //   // Use multi select and make a custom email form
  //   console.log("Sending Email");
  //   props.sendCustomEmail(recipient_email, email_subject, email_body);
  // };

  const handleDelete = (candidate_id) => {
    console.log("Deleting Candidate");
    props.deleteShortlistedCandidate(candidate_id); // FIX ERROR
  };

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper} elevation={10}>
          <Grid container spacing={3}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  style={{ borderRadius: "50%" }}
                  className={classes.img}
                  alt="Candidate's Picture"
                  src={props.candidate_image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs={9}>
                  <Typography gutterBottom={true} variant="subtitle1">
                    {props.candidate_name}
                  </Typography>
                  <Typography
                    gutterBottom={true}
                    variant="body2"
                    color="primary"
                  >
                    {props.candidate_email}
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {props.candidate_degree}
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {props.candidate_institute}
                  </Typography>
                  <Typography variant="subtitle1" color="textPrimary">
                    {props.candidate_location}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid container justify="flex-end">
                    <Grid item xs={9}>
                      <CircularProgressMatch match={props.candidate_match} />
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" color="secondary" gutterBottom>
                        {props.candidate_match}%
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item xs={4}>
                  <Button
                    color="primary"
                    size="small"
                    onClick={() => {
                      handleDelete(props.candidate_id);
                    }}
                  >
                    Delete Candidate
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button color="primary" size="small">
                    <a
                      style={{ textDecoration: "none", color: "inherit" }}
                      // component="button"
                      // variant="body2"
                      href={`../../../static/frontend/${Current_Applicant_CV}`} //we'll retreive from our static directory because the bundle is made there for us [it takes the file from original directory and places it to our static directory]
                      target="_new"
                    >
                      View Original Resume
                    </a>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  {/* <Button color="primary" size="small" onClick={handleEmail}>
                    Send an Email
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    onClick={handleCustomEmail}
                  >
                    Send Custom Email
                  </Button> */}
                  <EmailMenu />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

ComplexGrid.propTypes = {
  // sendEmail: PropTypes.func.isRequired,
  deleteShortlistedCandidate: PropTypes.func.isRequired,
};

// export default connect(null, { sendEmail, deleteShortlistedCandidate })(
//   ComplexGrid
// );
export default connect(null, { deleteShortlistedCandidate })(ComplexGrid);
// Comments [Changes to be made]:
// Change to this
// <Link
// style={{ textDecoration: "none", color: "inherit" }}
// to={"/IndividualProfile/" + props.candidate_id}
// variant="body2"
// >
// Candidate Profile Details
// </Link>

{
  /* <MuiLink
  style={{ textDecoration: "none", color: "inherit" }}
  component="button"
  variant="body2"
  href={`../../../static/frontend/${Current_Applicant_CV}`} //we'll retreive from our static directory because the bundle is made there for us [it takes the file from original directory and places it to our static directory]
  target="_new"
>
  View Original Resume
</MuiLink>; */
}
