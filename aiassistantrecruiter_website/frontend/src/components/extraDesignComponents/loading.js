import React from "react";
import "../../styles/Loading.scss";

export default function loading() {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "700px",
        backgroundColor: "#E4AB2E",
        padding: "15px",
      }}
      id="loading-page"
    >
      <div className="body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1>Loading Superfast ...</h1>
    </div>
  );
}
