import React, { Component } from "react";

//for react router below
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//for react router above

import AskQuestion from "./GetHelpPages/askQuestions";
import FAQ from "./GetHelpPages/FAQ";
import ReportProblem from "./GetHelpPages/reportProblem";
import ShareSuggestions from "./GetHelpPages/shareSuggestions";
import GuideMsg from "../guideComponent/guidanceMessage";

class Help extends Component {
  render() {
    return helpForm();
  }
}
function helpForm() {
  return (
    <Router>
      <div id="pageContainer" style={{ minHeight: "700px" }}>
        <GuideMsg location="GET HELP!" />
        <div className="container-fluid" id="navbarContainer">
          <ul class="nav nav-tabs bg-dark">
            <li class="nav-item">
              <Link class="nav-link" to="/ReportProblem">
                Report Problem
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/AskQuestion">
                Ask Questions
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/FAQ">
                FAQs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/ShareSuggestions">
                Share Suggestions
              </Link>
            </li>
          </ul>
          <br />
        </div>

        <div>
          <Route exact path="/Help" component={AskQuestion} />
          <Route exact path="/AskQuestion" component={AskQuestion} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/ReportProblem" component={ReportProblem} />
          <Route exact path="/ShareSuggestions" component={ShareSuggestions} />
        </div>
      </div>
    </Router>
  );
}

export default Help;
