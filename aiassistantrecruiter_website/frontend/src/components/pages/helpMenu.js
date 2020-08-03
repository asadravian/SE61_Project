import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import PeopleIcon from "@material-ui/icons/People";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import HelpIcon from "@material-ui/icons/Help";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

import AskQuestion from "./GetHelpPages/askQuestions";
import FAQ from "./GetHelpPages/FAQ";
import ReportProblem from "./GetHelpPages/reportProblem";
import ShareSuggestions from "./GetHelpPages/shareSuggestions";

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ minHeight: "700px" }}>
      <AppBar position="static">
        {/* <Paper square> Use this for white background of help navbar */}
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab
            icon={<PeopleIcon />}
            label="FREQUENTLY ASKED QUESTIONS"
            {...a11yProps(0)}
          />
          <LinkTab
            icon={<HelpIcon />}
            label="ASK QUESTIONS"
            {...a11yProps(1)}
          />
          <LinkTab
            icon={<ReportProblemIcon />}
            label="REPORT A PROBLEM"
            {...a11yProps(2)}
          />
          <LinkTab
            icon={<SentimentVerySatisfiedIcon />}
            label="SHARE SUGGESTIONS"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      {/* </Paper> */}
      <TabPanel value={value} index={0}>
        <FAQ />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AskQuestion />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReportProblem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ShareSuggestions />
      </TabPanel>
    </div>
  );
}
