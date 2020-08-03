import React from "react";
import AddIcon from "@material-ui/icons/Add";

import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

import JobPostingDialog from "./jobPostingDialog";
import UploadDialogBox from "./resumeUploadDialog";

export default function DialogBoxSeries() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpenForJobPosting = () => {
    setOpen(true);
  };
  const handleCloseForJobPosting = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: "15px" }}>
      {/*this margin 15 px is for the blue post job button, to not touch upper msg boundary*/}
      <Tooltip title="Post a new job !" aria-label="PostJob">
        <Fab color="primary" aria-label="add" style={{ outline: "none" }}>
          <AddIcon onClick={handleClickOpenForJobPosting} />
        </Fab>
      </Tooltip>
      <JobPostingDialog open={open} onClose={handleCloseForJobPosting} />
    </div>
  );
}
