import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    maxWidth: 700,
    maxHeight: 500,
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
  button: {
    padding: theme.spacing(2),
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item>
              <Skeleton variant="circle" width={128} height={128} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs container direction="column" spacing={3}>
                  <Grid item xs={12}>
                    <Skeleton variant="rect" width={340} height={200} />
                  </Grid>
                </Grid>
                <Grid item xs container direction="column" spacing={3}>
                  <Grid item xs={12}>
                    <Grid
                      item
                      xs={12}
                      container
                      direction="row"
                      justify="flex-end"
                    >
                      <Grid item xs={4} className={classes.button}>
                        <Skeleton variant="text" width={100} height={50} />
                      </Grid>
                      <Grid item xs={4} className={classes.button}>
                        <Skeleton variant="text" width={100} height={50} />
                      </Grid>
                      <Grid item xs={4} className={classes.button}>
                        <Skeleton variant="text" width={100} height={50} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
