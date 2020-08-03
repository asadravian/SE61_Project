import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { blue } from "@material-ui/core/colors";

import { connect } from "react-redux";
import { addPosition } from "../../actions/jobPositionActions";

import UploadDialogBox from "./resumeUploadDialog";
const resumeRepositoryList = ["This PC", "Google Drive", "OneDrive", "DropBox"];

const useStyles = makeStyles((theme) => ({
  StyleDialogTitle: {
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
    margin: "auto",
  },
  Padding: {
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
    margin: `${theme.spacing(3)}px auto`,
  },
}));

function JobPostingDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(
    resumeRepositoryList[0]
  );

  const handleClickOpenForUpload = () => {
    setOpen(true);
  };

  const handleCloseForUpload = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [job_title, setJobTitle] = useState("");
  const [vacancy_count, setVacancyCount] = useState("");

  const handleClose = () => {
    props.onClose();
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };
  const handleVacancyCount = (e) => {
    setVacancyCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(job_title);
    console.log(vacancy_count);

    const jobPositionData = {
      job_title: job_title,
      vacancy_count: vacancy_count,
      screening_ideal_fit_progress: 0,
    };

    props.addPosition(jobPositionData);

    handleClose();
    handleClickOpenForUpload();
  };

  return (
    <div>
      <Dialog
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        disableBackdropClick
        open={props.open}
        className={classes.Padding}
      >
        <DialogTitle
          className={classes.StyleDialogTitle}
          id="simple-dialog-title"
        >
          Job Posting
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <DialogContentText>Job Title</DialogContentText>
            <TextField
              id="job_title"
              multiline
              rows="3"
              fullWidth
              value={job_title}
              onChange={handleJobTitleChange}
              placeholder="Please mention the job title"
              variant="outlined"
            />
            <DialogContentText>Vacancy Count</DialogContentText>
            <TextField
              id="vacancyCount"
              multiline
              rows="2"
              fullWidth
              value={vacancy_count}
              onChange={handleVacancyCount}
              placeholder="Please mention the vacancy"
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="outlined" color="primary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
      <UploadDialogBox
        selectedValue={selectedValue}
        open={open}
        onClose={handleCloseForUpload}
      />
    </div>
  );
}

JobPostingDialog.propTypes = {
  addPosition: PropTypes.func.isRequired,
};

export default connect(null, {
  addPosition,
})(JobPostingDialog);
