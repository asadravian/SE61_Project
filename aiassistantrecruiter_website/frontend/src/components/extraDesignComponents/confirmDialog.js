import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

function ResponsiveDialog(props) {
  //we are keenly listening changes to props.is_active
  useEffect(() => {
    setOpen(props.is_active);
  }, [props.is_active]);

  const [open, setOpen] = React.useState(props.is_active);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDialogClose = (response_button_status) => {
    props.send_response_to_parent(response_button_status);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Do you want to proceed?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once the Job Post is deleted it cannot be restored again. Please
            confirm to continue operation!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleDialogClose(true);
            }}
            color="primary"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              handleDialogClose(false);
            }}
            color="primary"
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ResponsiveDialog;
