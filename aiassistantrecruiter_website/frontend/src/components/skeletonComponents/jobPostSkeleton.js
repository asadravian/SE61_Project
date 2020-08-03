import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

export default function JobPostSkeleton() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Skeleton animation="wave" height={40} width="80%" />
      </CardContent>
      <CardContent>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
      </CardContent>
      <CardContent>
        <div className="row">
          <div className="col">
            <Skeleton
              component="span"
              animation="wave"
              height={40}
              width="100%"
            />
          </div>
          <div className="col">
            <Skeleton
              component="span"
              animation="wave"
              height={40}
              width="100%"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
