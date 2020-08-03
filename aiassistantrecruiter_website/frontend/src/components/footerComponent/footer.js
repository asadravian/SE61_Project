import React, { Component } from "react";

import "../../styles/footer.css";

class Footer extends Component {
  render() {
    return Home();
  }
}
function Home() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; AI Assistant Recruiter 2020. All Rights Reserved.
              {/* <a href="#">AI Assistant Recruiter Team</a>. */}
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/ai.assistant.recruiter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="https://twitter.com/AIAssistantRec1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/ai.assistant.recruiter/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/muhammad-shaharyar-khan-87b7ab1a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
