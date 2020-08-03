import React, { Component } from "react";

import "../../styles/nwfooter.css";

class Footer extends Component {
  render() {
    return Home();
  }
}
function Home() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              aiassistantrecruiter.com <i>AUTOMATE REPETITIVE TASKS </i>
              bdalsdsajdhsakljflkjskfjskljflksajflkajslkfjlkajslkjf
              safkjjsaklfjlkasjflkajs asfjjlkasjfkljslkjflkjsalkjflkjsalkfjslkf
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Service Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  Recruiter Chat Bots
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  Intelligent Resume Screening
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  Insight Dashboard
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Data to Wisdom
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Automation</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">
                  AI Recruitment
                </a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; AI Assistant Recruiter 2020. All Rights Reserved.
              {/* <a href="#">AI Assistant Recruiter Team</a>. */}
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
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
