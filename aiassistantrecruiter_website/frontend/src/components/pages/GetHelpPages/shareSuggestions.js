import React, { Component } from "react";

import TextBoxTemplate from "../../textBoxComponent/textBox";

class ShareSuggestion extends Component {
  render() {
    return (
      <div className="container-fluid" id="pageContainer">
        <h2 style={{ paddingLeft: "1%" }}> Share Suggestions</h2>
        <TextBoxTemplate help_type="suggestion" />
      </div>
    );
  }
}

export default ShareSuggestion;
