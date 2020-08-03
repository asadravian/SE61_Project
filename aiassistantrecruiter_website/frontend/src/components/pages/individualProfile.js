import React, { useEffect, useState } from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import GuideMsg from "../guideComponent/guidanceMessage";
import "../../styles/PDFbutton.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getShortlistedCandidate } from "../../actions/shortlistedCandidatesActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 800,
    maxHeight: 1000,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    border: "3px solid #314455",
    outline: "3px solid #9e5a63", //outline is an extra border.
  },
  buttonPaper: {
    backgroundColor: "#C96567",
    margin: `${theme.spacing(3)}px auto`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center",
    maxWidth: 800,
  },
}));

function IndividualProfile(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [candidate_accessed, setCandidateAccessed] = useState("");

  useEffect(() => {
    const {
      match: { params },
    } = props;

    setCandidateAccessed(params.shortlisted_candidate_id);

    props.getShortlistedCandidate(props.match.params.shortlisted_candidate_id);
    setIsLoading(false);
  }, []);

  const classes = useStyles();

  if (isLoading) {
    return (
      <div
        className={classes.root}
        style={{
          minHeight: "700px",
          padding: "15px",
          position: "relative",
        }}
      >
        <div
          className="d-flex justify-content-center"
          style={{
            margin: "0",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="spinner-border"
            style={{
              width: "3rem",
              height: "3rem",
            }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  //*****************DYNAMIC IMPORT CODE BELOW*****DONT MESS WITH THE COMMENTS INSIDE - THEY ARE FOR WEBPACK*********************//
  const Current_Applicant_CV = props.shortlistedCandidate.candidate_resume_path;

  import(
    /* webpackInclude: /\.(pdf|doc|docx)$/ */
    /* webpackMode: "lazy-once" */ `../../../../assets/pdf/${Current_Applicant_CV}`
  );

  //*****************DYNAMIC IMPORT CODE UP*****DONT MESS WITH THE COMMENTS INSIDE - THEY ARE FOR WEBPACK*********************//

  return (
    <div
      className={classes.root}
      style={{
        minHeight: "700px",
        backgroundColor: "#EAE7DC",
        padding: "15px",
      }}
    >
      <GuideMsg location="CANDIDATES' PROFILE INFORMATION" />
      <Grid item xs={12}>
        <Paper className={classes.buttonPaper} square={true}>
          <a
            className="pdf_button pdf_button-default"
            type="button"
            href={`../../../static/frontend/${Current_Applicant_CV}`} //we'll retreive from our static directory because the bundle is made there for us [it takes the file from original directory and places it to our static directory]
            target="_new"
          >
            View Original Resume
          </a>
        </Paper>
      </Grid>
      <Paper className={classes.paper} square={true}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              color="primary"
              align="center"
            >
              Candidate's Profile Information [
              <span style={{ color: "orange" }}>
                {props.shortlistedCandidate.candidate_match}%
              </span>{" "}
              match]
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: "1px solid grey",
              textAlign: "center",
              fontSize: "150%",
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Personal Info
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Name: </span>
              {props.shortlistedCandidate.candidate_name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Email: </span>
              {props.shortlistedCandidate.candidate_email}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Phone Number: </span>
              {props.shortlistedCandidate.candidate_phone}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: "1px solid grey",
              textAlign: "center",
              fontSize: "150%",
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Education
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Institute: </span>
              {props.shortlistedCandidate.candidate_institute}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Degree: </span>
              {props.shortlistedCandidate.candidate_degree}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>CGPA: </span>
              {props.shortlistedCandidate.candidate_cgpa}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: "1px solid grey",
              textAlign: "center",
              fontSize: "150%",
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Other Info
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Location: </span>
              {props.shortlistedCandidate.candidate_location}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Gender: </span>
              {props.shortlistedCandidate.candidate_gender}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              borderBottom: "1px solid grey",
              textAlign: "center",
              fontSize: "150%",
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Skills
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Technical Skills: </span>
              {/* static because we need to modify database to accomodate these fields {props.shortlistedCandidate.candidate_gender} */}
              Java, ML, JS, React, Angular, Python, Wordpress
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Experience: </span>
              {/* {props.shortlistedCandidate.candidate_gender} */}4 years of
              relevant experience
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span style={{ color: "blue" }}>Held Position: </span>
              {/* {props.shortlistedCandidate.candidate_gender} */}
              Front-end engineer, Team Lead
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

IndividualProfile.propTypes = {
  getShortlistedCandidate: PropTypes.func.isRequired,
  shortlistedCandidate: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shortlistedCandidate:
    state.shortlistedCandidatesReducer.shortlisted_candidate,
});

export default connect(mapStateToProps, { getShortlistedCandidate })(
  IndividualProfile
);
