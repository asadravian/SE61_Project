import React from "react";

import "../../styles/page404.scss";

export default function page404() {
  return (
    <div
      id="page404"
      className="container-fluid"
      style={{
        minHeight: "700px",
        backgroundColor: "#ff7f2e",
        padding: "15px",
      }}
    >
      <div className="text">
        <p>404</p>
      </div>
      <div className="container">
        {/* <!-- caveman left --> */}
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right">
            <div className="club"></div>
          </div>
        </div>
        {/* <!-- caveman right --> */}
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right">
            <div className="club"></div>
          </div>
        </div>
      </div>
      {/* <!-- //////////////// CREDIT //////////////// --> */}
      <a href="https://codepen.io/SofiaSergio/" target="_blank">
        <div id="link">
          <p>Animation by Sofia Sergio</p>
        </div>
      </a>
    </div>
  );
}
