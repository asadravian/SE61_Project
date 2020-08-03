import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

class userLocation extends React.Component {
  render() {
    return (
      <Typography component="div">
        <Box
          style={{ margin: "auto" }}
          textAlign="center"
          color="white"
          bgcolor="skyblue"
          border="1px solid blue"
          p={1}
          width={1 / 3}
        >
          YOU ARE ON {this.props.location}
        </Box>
      </Typography>
    );
  }
}
export default userLocation;
