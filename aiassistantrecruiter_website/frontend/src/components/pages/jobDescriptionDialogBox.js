import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";
import MultilineTextFields from "../textAreaComponent/textArea";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addJobDescription } from "../../actions/jobDescriptionActions";
import { addJobPostingStatus } from "../../actions/jobPostingStatusActions";
import authReducer from "../../reducers/authReducer";

import SelectGravity from "../selectComponent/select";

import Box from "@material-ui/core/Box";

function JobDescriptionDialogBox(props) {
  const { onClose, open } = props;

  const [skillset, setSkillset] = useState("");
  const [institution, setInstitution] = useState("");
  const [education_level, setEducationLevel] = useState("");
  const [education_background, setEducationBackground] = useState("");
  const [experience, setExperience] = useState("");
  const [certificates, setCertificates] = useState("");
  const [age_requirement, setAgeRequirement] = useState("");
  const [held_position, setHeldPosition] = useState("");

  const [skillset_gravity, setSkillsetGravity] = React.useState("");
  const [education_gravity, setEducationGravity] = React.useState("");
  const [experience_gravity, setExperienceGravity] = React.useState("");

  const handleClose = () => {
    onClose();
  };

  const handleSkillsetChange = (e) => {
    setSkillset(e.target.value);
  };
  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };
  const handleEducationBackgroundChange = (e) => {
    setEducationBackground(e.target.value);
  };
  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };
  const handleCertificatesChange = (e) => {
    setCertificates(e.target.value);
  };
  const handleAgeRequirementChange = (e) => {
    setAgeRequirement(e.target.value);
  };
  const handleHeldPositionChange = (e) => {
    setHeldPosition(e.target.value);
  };

  const handleSkillsetGravityChange = (value_passed_by_child) => {
    setSkillsetGravity(value_passed_by_child);
  };

  const handleEducationGravityChange = (value_passed_by_child) => {
    setEducationGravity(value_passed_by_child);
  };

  const handleExperienceGravityChange = (value_passed_by_child) => {
    setExperienceGravity(value_passed_by_child);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();

    console.log("Job Description Dialog: [DB Save Paused for a while]");
    console.log(skillset);
    console.log(skillset_gravity);
    console.log(institution);
    console.log(education_level);
    console.log(education_background);
    console.log(education_gravity);
    console.log(experience);
    console.log(experience_gravity);
    console.log(certificates);
    console.log(age_requirement);
    console.log(held_position);

    const jobStatusData = {
      is_deleted: 0,
      is_current: 0,
      is_completed: 0,
    };

    props.addJobDescription(
      skillset,
      institution,
      education_background,
      education_level,
      experience,
      certificates,
      age_requirement,
      held_position,
      education_gravity,
      experience_gravity,
      skillset_gravity
    );
    props.addJobPostingStatus(jobStatusData);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      disableBackdropClick
    >
      <DialogTitle id="form-dialog-title">
        Job Description Criteria : Provide a Sketch of Your Ideal-Fit
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Box borderBottom={1} p={3} borderColor="grey.700">
            <DialogContentText>Skillset</DialogContentText>
            <TextField
              id="skillset"
              multiline
              rows="4"
              fullWidth
              value={skillset}
              onChange={handleSkillsetChange}
              placeholder="Please write the skillset you prefer"
              variant="outlined"
            />
            <SelectGravity
              saveGravityStateInsideParent={handleSkillsetGravityChange}
              field_name={"Skillset"}
            />
          </Box>
          <Box borderBottom={1} p={3} borderColor="grey.700">
            <DialogContentText>Institution</DialogContentText>
            <TextField
              id="institution"
              multiline
              rows="4"
              fullWidth
              value={institution}
              onChange={handleInstitutionChange}
              placeholder="Please write the institution you prefer"
              variant="outlined"
            />
            <DialogContentText>Education Background</DialogContentText>
            <TextField
              id="education_background"
              multiline
              rows="4"
              fullWidth
              value={education_background}
              onChange={handleEducationBackgroundChange}
              placeholder="Please write the education background required"
              variant="outlined"
            />
            <DialogContentText>Education Level</DialogContentText>
            <TextField
              id="education_level"
              multiline
              rows="4"
              fullWidth
              value={education_level}
              onChange={handleEducationLevelChange}
              placeholder="Please write the education level you prefer"
              variant="outlined"
            />
            <SelectGravity
              saveGravityStateInsideParent={handleEducationGravityChange}
              field_name={"Education"}
            />
          </Box>
          <Box borderBottom={1} p={3} borderColor="grey.700">
            <DialogContentText>Experience</DialogContentText>
            <TextField
              id="experience"
              multiline
              rows="4"
              fullWidth
              value={experience}
              onChange={handleExperienceChange}
              placeholder="Please write the experience you prefer"
              variant="outlined"
            />
            <SelectGravity
              saveGravityStateInsideParent={handleExperienceGravityChange}
              field_name={"Experience"}
            />
          </Box>
          <Box p={3}>
            <DialogContentText>Certificates</DialogContentText>
            <TextField
              id="certificates"
              multiline
              rows="4"
              fullWidth
              value={certificates}
              onChange={handleCertificatesChange}
              placeholder="Please write the certificates you prefer"
              variant="outlined"
            />
            <DialogContentText>Age Requirement</DialogContentText>
            <TextField
              id="age_requirement"
              multiline
              rows="4"
              fullWidth
              value={age_requirement}
              onChange={handleAgeRequirementChange}
              placeholder="Please write the age required, if any"
              variant="outlined"
            />
            <DialogContentText>Held Position</DialogContentText>
            <TextField
              id="held_position"
              multiline
              rows="4"
              fullWidth
              value={held_position}
              onChange={handleHeldPositionChange}
              placeholder="Please mention the designation that is a pre-requisite and should be held by the candidate"
              variant="outlined"
            />
          </Box>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

JobDescriptionDialogBox.propTypes = {
  addJobDescription: PropTypes.func.isRequired,
  addJobPostingStatus: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default connect(null, {
  addJobDescription,
  addJobPostingStatus,
})(JobDescriptionDialogBox);
