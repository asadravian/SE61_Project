import React, { Component } from "react";

import TextBoxTemplate from "../../textBoxComponent/textBox";

class AskQuestion extends Component {
  render() {
    return (
      <div className="container-fluid" id="pageContainer">
        <h2 style={{ paddingLeft: "1%" }}>Ask Questions</h2>
        <TextBoxTemplate help_type="question" />
      </div>
    );
  }
}

export default AskQuestion;
