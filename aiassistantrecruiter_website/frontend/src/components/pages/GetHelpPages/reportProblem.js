import React, { Component } from "react";

import TextBoxTemplate from "../../textBoxComponent/textBox";

class ReportProblem extends Component {
  render() {
    return (
      <div className="container-fluid" id="pageContainer">
        <h2 style={{ paddingLeft: "1%" }}> Report a Problem</h2>
        <TextBoxTemplate help_type="problem" />
      </div>
    );
  }
}

export default ReportProblem;
