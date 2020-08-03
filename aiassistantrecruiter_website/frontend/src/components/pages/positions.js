import React, { Component } from "react";

import ProgressCard from "../cardComponent/newCard";
import GuideMsg from "../guideComponent/guidanceMessage";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPositions } from "../../actions/jobPositionActions";

import {
  getJobPostingStatus,
  modifyJobPostingStatus,
} from "../../actions/jobPostingStatusActions";

import JobPostSkeleton from "../skeletonComponents/jobPostSkeleton";

import { runAlgorithm } from "../../actions/algorithmActions";

class Positions extends Component {
  state = {
    isLoading: true,
  };

  static propTypes = {
    jobPositions: PropTypes.array.isRequired,
    getPositions: PropTypes.func.isRequired,
    getJobPostingStatus: PropTypes.func.isRequired,
    modifyJobPostingStatus: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPositions();
    this.props.getJobPostingStatus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, isLoading: false });
      console.log(this.state);
    }
  }

  moveToJunkyard = (jobPostingID) => {
    var correspondingStatus;
    var status_id;

    this.props.jobStatus.map((status) => {
      correspondingStatus = this.props.jobStatus.filter(
        (status) => status.job_posting_reference == jobPostingID
      );
      console.log(correspondingStatus[0].id);
      status_id = correspondingStatus[0].id;
    });

    console.log(status_id);
    const newStatus = {
      id: status_id,
      is_deleted: "true",
    };
    this.props.modifyJobPostingStatus(newStatus, status_id);
    console.log("Job Posting Status [Junkyard] Updated");
  };

  startAiAlgorithm = (jobPostingID) => {
    var correspondingStatus;
    var status_id;

    this.props.jobStatus.map((status) => {
      correspondingStatus = this.props.jobStatus.filter(
        (status) => status.job_posting_reference == jobPostingID
      );
      console.log(correspondingStatus[0].id);
      status_id = correspondingStatus[0].id;
    });

    console.log(status_id);
    const newStatus = {
      id: status_id,
      is_current: "true",
    };
    this.props.modifyJobPostingStatus(newStatus, status_id);
    console.log("Job Posting Status [Dashboard] Updated");
    this.props.runAlgorithm(jobPostingID);
    console.log(
      "Position.js: Algorithm Started [Job Posting ID: " + jobPostingID + "]"
    );
  };
  renderCardsStrategically(cards) {
    let results = cards;
    let finalArr = [],
      columns = [];

    results.forEach((result, i) => {
      columns.push(
        <div className="col-12 col-sm-6 col-md-6 col-lg-4" key={result.id}>
          <ProgressCard
            deleteCard={this.moveToJunkyard}
            performAI={this.startAiAlgorithm}
            id={result.id}
            job_title={result.job_title}
            vacancy_count={result.vacancy_count}
            applicants_count={result.applicants_count}
            screening_ideal_fit_progress={result.screening_ideal_fit_progress}
          />
        </div>
      );

      if ((i + 1) % 3 == 1 && i + 1 == results.length) {
        finalArr.push(
          <div className="row" key={i}>
            {columns}
          </div>
        );
      }
      if ((i + 1) % 3 == 2 && i + 1 == results.length) {
        finalArr.push(
          <div className="row" key={i}>
            {columns}
          </div>
        );
      }
      if ((i + 1) % 3 == 0) {
        finalArr.push(
          <div className="row" key={i}>
            {columns}
          </div>
        );
        columns = [];
      }
    });
    return finalArr;
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <div
          className="container-fluid"
          id="pageContainer"
          style={{
            minHeight: "700px",
            backgroundColor: "#EBEDFF",
            padding: "15px",
          }}
        >
          <div className="container" style={{ minWidth: "100%" }}>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <JobPostSkeleton />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <JobPostSkeleton />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <JobPostSkeleton />
              </div>
            </div>
          </div>
        </div>
      );
    }
    var newPostIDs = new Array();
    var newPostpageCards = new Array();
    var newPostPagePositionCards = new Array();

    this.props.jobStatus.map((status) => {
      newPostpageCards = this.props.jobStatus.filter(
        (status) =>
          status.is_current != 1 &&
          status.is_deleted != 1 &&
          status.is_completed != 1
      );
    });
    for (var i = 0; i < newPostpageCards.length; i++) {
      newPostIDs[i] = newPostpageCards[i].job_posting_reference;
    }
    this.props.jobPositions.map((position) => {
      newPostPagePositionCards = this.props.jobPositions.filter((position) =>
        newPostIDs.includes(position.id)
      );
    });

    return (
      <div
        className="container-fluid"
        style={{
          minHeight: "700px",
          backgroundColor: "#EBEDFF",
          padding: "15px",
        }}
        id="pageContainer"
      >
        <div className="container" style={{ minWidth: "100%" }}>
          <div className="row justify-content-end"></div>
          {newPostPagePositionCards
            ? this.renderCardsStrategically(newPostPagePositionCards)
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  jobPositions: state.jobPositionReducer.positions,
  jobStatus: state.jobPostingStatusReducer.status,
});

export default connect(mapStateToProps, {
  getPositions,
  getJobPostingStatus,
  modifyJobPostingStatus,
  runAlgorithm,
})(Positions);
