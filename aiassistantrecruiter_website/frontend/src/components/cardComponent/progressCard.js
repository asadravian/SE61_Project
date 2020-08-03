import React, { Component } from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import MuiLink from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";

import ProgressBar from "../progressBarComponent/progressBar";
import { getAlgorithmProgress } from "../../actions/algorithmActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "15px",
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  // export default function MediaCard(props) {
  const classes = useStyles();

  const [progress, setProgress] = useState(0);
  const handleProgress = (value) => {
    setProgress(value);
  };

  useEffect(() => {
    // const previousFooRef = useRef(props.foo);

    // useEffect(() => {
    //   if (previousFooRef.current !== props.foo) {
    //     animateSomething(ref, props.onAnimationComplete);
    //     previousFooRef.current = props.foo;
    //   }
    // }, [props.foo, props.onAnimationComplete]);

    // const previous_live_progress = props.live_progress;
    // let time = 60; @new_flop_way
    setTimeout(function () {
      props.getAlgorithmProgress();

      // if (previous_live_progress !== props.live_progress) {
      const int_progress = parseInt(props.live_progress);

      // if (int_progress < 20) { @new_flop_wayNo good because rememeber you are using db save and that much requests, not a smart move, to be throwing at the server
      //   time = 15000;
      // } else if (int_progress > 20 && int_progress < 50) {
      //   time = 6000;
      // } else if (int_progress > 50 && int_progress < 80) {
      //   time = 3000;
      // } else if (int_progress > 80) {
      //   time = 30;
      // }
      // handleProgress(parseInt(props.live_progress));
      handleProgress(int_progress);
      // previous_live_progress = props.live_progress;
      // }
    }, 15000);
    // @new_flop_way}, time);
  });

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
          {/* <Typography variant="body1" color="textPrimary" component="div"> */}
          {props.screening_ideal_fit_progress == 100 ? (
            <Typography variant="body1" color="textPrimary" component="div">
              Progress: {props.screening_ideal_fit_progress}%
              <ProgressBar match={props.screening_ideal_fit_progress} />
            </Typography>
          ) : (
            <Typography variant="body1" color="textPrimary" component="div">
              Progress: {progress}%
              <ProgressBar match={progress} />
            </Typography>
          )}
          {/* </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="flex-start">
          <Grid item>
            <Button color="primary" size="small">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={"/CandidateList/" + props.id}
                variant="body2"
              >
                View Outcome
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item>
            <Button
              onClick={() => {
                props.deleteCard(props.id);
              }}
              color="primary"
              size="small"
            >
              Throw in Junkyard
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  getAlgorithmProgress: PropTypes.func.isRequired,
  // live_progress: PropTypes.string.isRequired,
  // live_progress: PropTypes.number.isRequired,
  live_progress: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  live_progress: state.algorithmReducer.algorithm_progress_percentage,
});

export default connect(mapStateToProps, { getAlgorithmProgress })(MediaCard);
