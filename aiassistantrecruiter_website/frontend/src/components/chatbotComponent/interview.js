import React, { Component } from "react";

// import InterviewBackgroundImage from "../../../../assets/img/Background/job_interview_background.png";
import InterviewBackgroundImage from "../../../../assets/img/Background/interview.jpg";

class Interview extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        id="pageContainer"
        style={{
          minHeight: "700px",
          backgroundImage: `url(${InterviewBackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "5%",
          color: "white",
          fontSize: "20px",
          padding: "15px",
        }}
      >
        <div className="container"></div>
      </div>
    );
  }
}

export default Interview;
