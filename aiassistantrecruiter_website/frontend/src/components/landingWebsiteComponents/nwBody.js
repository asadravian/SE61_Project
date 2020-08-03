import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import MyBackgroundImage from "../../../static/frontend/recruiter_theme.jpg";
import WebsiteSignin from "./nwSignin";
import WebsiteSignup from "./nwSignup";

class LandingPageBody extends Component {
  render() {
    return (
      <Router>
        <div
          style={{
            minHeight: "700px",
            // backgroundImage: `url(${MyBackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Route exact path="/" component={WebsiteSignin} />
          <Route exact path="/WebsiteSignin" component={WebsiteSignin} />
          <Route exact path="/WebsiteSignup" component={WebsiteSignup} />
        </div>
      </Router>
    );
  }
}

export default LandingPageBody;
