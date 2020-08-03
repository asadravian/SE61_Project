import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularStatic(props) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted((prevCompleted) =>
        prevCompleted >= 100 ? 0 : prevCompleted + 10
      );
    }

    const timer = setInterval(progress, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="static"
        value={props.match}
        color="secondary"
      />
    </div>
  );
}
