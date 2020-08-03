import React, { Component, Fragment } from "react";

//for react router below
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//for react router above

//components
import Header from "./headerComponent/header";
import Footer from "./footerComponent/footer";
import Homepage from "./pages/homePage";
import Help from "./pages/help";
import Positions from "./pages/positions";
import Junkyard from "./pages/junkyard";
import CandidateList from "./pages/shortlistedCandidatesList";
import IndividualProfile from "./pages/individualProfile";
import HelpMenu from "./pages/helpMenu";
import Settings from "./pages/settings";

//user_accounts getting UI components
import SignIn from "./user_accounts/signIn";
import SignUp from "./user_accounts/signUp";
import About from "./pages/about";
import Interview from "./chatbotComponent/interview";
import page404 from "./extraDesignComponents/page404";

import {
  positions as alertPositions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./Alerts";

import { Provider } from "react-redux";
import store from "../store";

import PrivateRoute from "./common/PrivateRoute";

import { loadUser } from "../actions/authActions";

// Alert Options
const alertOptions = {
  timeout: 3000, // fadeout time 3 seconds [3000 milli sec]
  position: alertPositions.BOTTOM_CENTER, // onscreen position of alert msg
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <div className="App">
              <Alerts />

              <Header />
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/About" component={About} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/Interview" component={Interview} />

                <Route exact path="/SignUp" component={SignUp} />
                <PrivateRoute exact path="/Homepage" component={Homepage} />
                <PrivateRoute exact path="/Positions" component={Positions} />
                <PrivateRoute exact path="/Junkyard" component={Junkyard} />
                <PrivateRoute exact path="/Help" component={Help} />
                <PrivateRoute
                  exact
                  path="/CandidateList/:job_posting_id"
                  component={CandidateList}
                />
                <PrivateRoute
                  exact
                  path="/IndividualProfile/:shortlisted_candidate_id"
                  component={IndividualProfile}
                />
                <PrivateRoute exact path="/HelpMenu" component={HelpMenu} />
                <PrivateRoute exact path="/Settings" component={Settings} />
                <Route exact path="/*" component={page404} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
