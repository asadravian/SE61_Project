import React, { Component } from "react";

import AboutBackgroundImage from "../../../../assets/img/Background/Optimized_Backgrounds/CouchBackground.jpg";

class About extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        id="pageContainer"
        style={{
          minHeight: "700px",
          backgroundImage: `url(${AboutBackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "5%",
          color: "white",
          fontSize: "20px",
          padding: "15px",
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{ marginBottom: "30px", padding: "20px" }}
          >
            <div
              className="col"
              style={{
                // minWidth: "100%",
                backgroundColor: "#2D4159",
                opacity: "0.7",
                padding: "20px",
                margin: "2%",
                // borderRadius: "8%",
              }}
            >
              <h3 style={{ color: "#E4AB2E" }}>AI Assistant Recruiter</h3>
              <p>
                is a start-up enhancing recruiters' aptitude by providing its
                intelligent software. The application will screen out bad-fit
                candidates from a plethora of resumes on the basis of a set of
                filters, tailored for the recruiter's job post requirements.
                Providing customized dynamic filters to equip the recruiter even
                better. Secondly, We aim to provide another approach; extracting
                previous hiring patterns of an organization.
              </p>
            </div>

            <div
              className="col"
              style={{
                // minWidth: "100%",
                backgroundColor: "#895061",
                opacity: "0.7",
                padding: "20px",
                margin: "2%",
              }}
            >
              <h3>We explore</h3>
              <p>
                the issues faced by organizations during the hiring process.
                Analysing their needs and requirements. Extraction of data from
                the dataset of CVs. Classification of the required data which is
                extracted from the CVs. Providing customized checks and filters
                to screen the CVs. Training and modelling a system based on
                previous CVs against a job post.
              </p>
            </div>
          </div>

          <div
            className="row"
            style={{ marginBottom: "30px", padding: "20px" }}
          >
            <div
              className="col"
              style={{
                // minWidth: "100%",
                backgroundColor: "#895061",
                opacity: "0.7",
                padding: "20px",
                margin: "2%",
              }}
            >
              <h3>Our application</h3>
              <p>
                focuses on increasing human aptitude and efficiency; it will not
                replace a human recruiter but provide assistance. It will reduce
                cost per hire and the number of bad hires. Helping recruiters to
                focus on high-value tasks like interviewing and communicating.
                We aim to revolutionise the “Recruitment Process”.
              </p>
            </div>
            <div
              className="col"
              style={{
                // minWidth: "100%",
                backgroundColor: "#2D4159",
                opacity: "0.7",
                padding: "20px",
                margin: "2%",
              }}
            >
              <h3 style={{ color: "#E4AB2E" }}>The idea</h3>
              <p>
                of building an intelligent system by applying top-notch modern
                technologies, such as, data mining, machine learning, and
                artificial intelligence will smartly assist the recruiter by
                automatically screening the CVs. It makes hiring procedure
                quicker, efficient, unbiased, and error-free. Eliminating the
                long hectic hiring process.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
