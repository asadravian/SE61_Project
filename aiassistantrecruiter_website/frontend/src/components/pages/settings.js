import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

import ChangeForm from "../pages/changeSettings";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 700,
    },
  },
}));

export default function Settings() {
  const classes = useStyles();

  return (
    <div
      style={{
        minHeight: "500px",
        backgroundColor: "#EBEDFF",
        padding: "15px",
      }}
    >
      <ChangeForm />
    </div>
  );
}
