import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import NormalWebsite from "./components/normalWebsite";
import * as serviceWorker from "./serviceWorker";

function SwitchWebsites(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <App />; //real application
  } else {
    return <NormalWebsite />; //landing website
  }
}

ReactDOM.render(
  <SwitchWebsites isLoggedIn={true} />,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
