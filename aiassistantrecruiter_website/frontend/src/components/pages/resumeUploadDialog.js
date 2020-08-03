import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";

import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import UploadButton from "../upload";
import JobDescriptionDialogBox from "./jobDescriptionDialogBox";

import ProgressBar from "../progressBarComponent/progressBar";

import { resetReduxFileState } from "../../actions/fileActions";

import { connect } from "react-redux";

const resumeRepositoryList = ["This PC", "Google Drive", "OneDrive", "DropBox"];
const useStyles = makeStyles((theme) => ({
  avatar: {
    color: blue[600],
  },
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

function UploadDialogBox(props) {
  const [
    openJobDescriptionDialog,
    setOpenJobDescriptionDialog,
  ] = React.useState(false);

  const handleClickOpenForJobDescription = () => {
    setOpenJobDescriptionDialog(true);
  };
  const handleCloseForJobDescription = () => {
    setOpenJobDescriptionDialog(false);
  };
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.resetReduxFileState();
    onClose();
    handleClickOpenForJobDescription(); //open job description dialog
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
        disableBackdropClick
        className={classes.Padding}
      >
        <DialogTitle
          className={classes.StyleDialogTitle}
          id="simple-dialog-title"
        >
          Upload Resumes From{" "}
        </DialogTitle>

        <List className={classes.Padding}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <CloudUploadOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="This PC" />
          </ListItem>
          <ListItem>
            <UploadButton />
          </ListItem>
          {props.filesUploadProgress > 0 && (
            <ProgressBar match={props.filesUploadProgress} />
          )}

          <ListItem style={{ justifyContent: "center" }}>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              id="next-button"
              onClick={handleSubmit}
              disabled={
                !props.filesUploaded || 0 === props.filesUploaded.length
                  ? true
                  : false
              }
              variant="outlined"
              color="primary"
            >
              Next
            </Button>
          </ListItem>
        </List>
      </Dialog>
      <JobDescriptionDialogBox
        open={openJobDescriptionDialog}
        onClose={handleCloseForJobDescription}
      />
    </div>
  );
}

UploadDialogBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  filesUploaded: state.files.uploadStatusAllFiles,
  filesUploadProgress: state.files.uploadProgress,
});

export default connect(mapStateToProps, { resetReduxFileState })(
  UploadDialogBox
);
