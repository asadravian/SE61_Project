import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import ProgressBar from "../progressBarComponent/progressBar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "15px",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" component="h1" color="primary">
            {props.job_title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="div">
            Number of Applicants: {props.applicants_count}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="div">
            Number of Positions: {props.vacancy_count}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="div">
            Progress: {props.screening_ideal_fit_progress}%
            <ProgressBar match={props.screening_ideal_fit_progress} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="flex-start">
          <Grid item>
            <Button
              onClick={() => {
                props.deleteCardPermanently(props.id);
              }}
              color="primary"
              size="small"
            >
              Remove Permanently
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              onClick={() => {
                props.restoreCard(props.id);
              }}
              color="primary"
              size="small"
            >
              Restore
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
