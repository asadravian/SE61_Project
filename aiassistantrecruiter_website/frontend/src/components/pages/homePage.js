import React, { Component } from "react";

import UploadDialogBox from "./postResumeDialogBox";
import ProgressCard from "../cardComponent/progressCard";
import GuideMsg from "../guideComponent/guidanceMessage";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPositions, deletePosition } from "../../actions/jobPositionActions";
import {
  getJobPostingStatus,
  modifyJobPostingStatus,
} from "../../actions/jobPostingStatusActions";
import { Typography } from "@material-ui/core";
import JobPostSkeleton from "../skeletonComponents/jobPostSkeleton";

class Homepage extends Component {
  state = {
    isLoading: true,
  };
  static propTypes = {
    jobPositions: PropTypes.array.isRequired,
    getPositions: PropTypes.func.isRequired,
    deletePosition: PropTypes.func.isRequired,
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
      is_current: "false",
    };
    this.props.modifyJobPostingStatus(newStatus, status_id);
    console.log("Job Posting Status [Junkyard] Updated");
  };

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
            <div className="row justify-content-end">
              <UploadDialogBox />
            </div>
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
    var homeIDs = new Array();
    var homepageCards = new Array();
    var homePagePositionCards = new Array();

    this.props.jobStatus.map((status) => {
      homepageCards = this.props.jobStatus.filter(
        (status) => status.is_current == 1
      );
    });
    for (var i = 0; i < homepageCards.length; i++) {
      homeIDs[i] = homepageCards[i].job_posting_reference;
    }
    this.props.jobPositions.map((position) => {
      homePagePositionCards = this.props.jobPositions.filter((position) =>
        homeIDs.includes(position.id)
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
          <div className="row justify-content-end">
            <UploadDialogBox />
          </div>
          <div className="row">
            {homePagePositionCards
              ? homePagePositionCards.map((position) => (
                  <div
                    className="col-12 col-sm-6 col-md-6 col-lg-4"
                    key={position.id}
                  >
                    <ProgressCard
                      deleteCard={this.moveToJunkyard}
                      id={position.id}
                      job_title={position.job_title}
                      vacancy_count={position.vacancy_count}
                      applicants_count={position.applicants_count}
                      screening_ideal_fit_progress={
                        position.screening_ideal_fit_progress
                      }
                    />
                  </div>
                ))
              : null}
          </div>
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
  deletePosition,
  getJobPostingStatus,
  modifyJobPostingStatus,
})(Homepage);
