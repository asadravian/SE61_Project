import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Homepage from "./homePage";
import Help from "./help";
import Positions from "./positions";
import Junkyard from "./junkyard";
import SignIn from "./signIn";
import SignUp from "./signUp";
import CandidateList from "./shortlistedCandidatesList";
import IndividualProfile from "./individualProfile";
import HelpMenu from "./helpMenu";
import Settings from "./settings";
import ShortlistedCandidatesList from "./shortlistedCandidatesList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Dashboard" {...a11yProps(0)} />
          <LinkTab label="Pending Job Positions" {...a11yProps(1)} />
          <LinkTab label="Junkyard" {...a11yProps(2)} />
          <LinkTab label="get Help" {...a11yProps(3)} />
          <LinkTab label="Sign In" {...a11yProps(4)} />
          <LinkTab label="Sign Up" {...a11yProps(5)} />
          <LinkTab label="Shortlisted Candidates" {...a11yProps(6)} />
          <LinkTab label="Candidate Profile" {...a11yProps(7)} />
          <LinkTab label="Profile Settings" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Homepage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Positions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Junkyard />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HelpMenu />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SignIn />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SignUp />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ShortlistedCandidatesList />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <IndividualProfile />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Settings />
      </TabPanel>
    </div>
  );
}
