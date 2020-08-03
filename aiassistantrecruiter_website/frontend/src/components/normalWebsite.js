import React from "react";

//for react router below
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//for react router above

import WebsiteHeader from "./landingWebsiteComponents/nwheader";
import WebsiteBody from "./landingWebsiteComponents/nwBody";
import WebsiteFooter from "./landingWebsiteComponents/nwfooter";

// import MyBackgroundImage from "../images/london-bridge.jpg";
import WebsiteSignin from "./landingWebsiteComponents/nwSignin";
import WebsiteSignup from "./landingWebsiteComponents/nwSignup";

export default function CenteredGrid() {
  return (
    <Router>
      <WebsiteHeader />
      <div
        style={{
          minHeight: "800px",
          // backgroundImage: `url(${MyBackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "5%",
        }}
      >
        <Route exact path="/" component={WebsiteSignin} />
        <Route exact path="/WebsiteSignin" component={WebsiteSignin} />
        <Route exact path="/WebsiteSignup" component={WebsiteSignup} />
      </div>
      <WebsiteFooter />
    </Router>
  );
}
