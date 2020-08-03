import React, { Component } from "react";

import ProgressCard from "../cardComponent/junkCard";
import GuideMsg from "../guideComponent/guidanceMessage";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPositions, deletePosition } from "../../actions/jobPositionActions";
import { getFiles, deleteFile } from "../../actions/fileActions";
import {
  getJobDescription,
  deleteJobDescription,
} from "../../actions/jobDescriptionActions";
import { deleteJobPostingStatus } from "../../actions/jobPostingStatusActions";
import {
  getShortlistedCandidates,
  deleteShortlistedCandidate,
} from "../../actions/shortlistedCandidatesActions";

import ResponsiveDialog from "../extraDesignComponents/confirmDialog";
import JobPostSkeleton from "../skeletonComponents/jobPostSkeleton";

import {
  getJobPostingStatus,
  modifyJobPostingStatus,
} from "../../actions/jobPostingStatusActions";

import { withRouter } from "react-router";

class Junkyard extends Component {
  state = {
    isLoading: true,
    is_dialog_active: false,
    job_post_id: 0,
  };

  static propTypes = {
    jobPositions: PropTypes.array.isRequired,
    getPositions: PropTypes.func.isRequired,
    deletePosition: PropTypes.func.isRequired,
    getJobPostingStatus: PropTypes.func.isRequired,
    modifyJobPostingStatus: PropTypes.func.isRequired,
    // deleteFile: PropTypes.func.isRequired,
    // deleteJobDescription: PropTypes.func.isRequired,
    // deleteJobPostingStatus: PropTypes.func.isRequired,
    // deleteShortlistedCandidate: PropTypes.func.isRequired,
    // getJobDescription: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPositions();
    this.props.getJobPostingStatus();
    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, isLoading: false });
      console.log(this.state);
    }
  }

  restore = (jobPostingID) => {
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
      is_deleted: "false",
      is_current: "false",
    };
    this.props.modifyJobPostingStatus(newStatus, status_id);
    console.log("Job Posting Status [Junkyard] Updated");
  };

  // PROBLEM SOLVED [DB WAS PREVENTNG - REFERENTIAL INTEGRITY ]
  // USED: ALTER TABLE my_table ADD CONSTRAINT table_id_usid FOREIGN KEY (tableid) REFERENCES books (tableid) ON DELETE CASCADE

  // deleteAllFilesAssociatedWithJobPost = (job_id) => {
  //   this.props.getFiles();
  //   // here do your stuff of getting relevant files to job_id [TO BE DONE]
  //   var junkIDs = new Array();
  //   var junkpageCards = new Array();
  //   var junkPagePositionCards = new Array();

  //   this.props.jobStatus.map((status) => {
  //     fetchAssociatedStatus = this.props.jobStatus.filter(
  //       (status) => status.job_posting_reference == job_id
  //     );
  //   });
  //   for (var i = 0; i < junkpageCards.length; i++) {
  //     junkIDs[i] = junkpageCards[i].job_posting_reference;
  //   }
  //   this.props.jobPositions.map((position) => {
  //     junkPagePositionCards = this.props.jobPositions.filter((position) =>
  //       junkIDs.includes(position.id)
  //     );
  //   });
  //   var associatedFiles = new Array();

  //   for (var i = 0; i < this.associatedFiles.length; i++) {
  //     this.props.deleteFile(associatedFiles[i].id);
  //   }
  // };
  // deleteAllShortlistedCandidatesResultAssociatedWithJobPost = (job_id) => {
  //   this.props.getShortlistedCandidates();

  //   // here do your stuff of getting relevant candidates to job_id [TO BE DONE]
  //   var associatedShortlistedCanadidates = new Array();

  //   for (var i = 0; i < this.associatedShortlistedCanadidates.length; i++) {
  //     this.props.deleteShortlistedCandidate(
  //       associatedShortlistedCanadidates[i].id
  //     );
  //   }
  // };

  // deleteJobDescriptionAssociatedWithJobPost = (job_id) => {
  //   this.props.getJobDescription();

  //   var fetchAssociatedDescription = {};

  //   this.props.jobDescription.map((description) => {
  //     fetchAssociatedDescription = this.props.jobDescription.filter(
  //       (description) => description.job_posting_reference == job_id
  //     );
  //   });
  //   this.props.deleteJobDescription(fetchAssociatedDescription.id);
  // };

  // deleteJobPostStatusAssociatedWithJobPost = (job_id) => {
  //   var fetchAssociatedStatus = {};

  //   this.props.jobStatus.map((status) => {
  //     fetchAssociatedStatus = this.props.jobStatus.filter(
  //       (status) => status.job_posting_reference == job_id
  //     );
  //   });
  //   this.props.deleteJobPostingStatus(fetchAssociatedStatus.id);
  // };

  userConfirmationResponse = (user_response) => {
    let delete_status = user_response;
    console.log("User Response: " + delete_status);
    console.log("In userConfirmationResponse: " + this.state.job_post_id);
    console.log("In userConfirmationResponse: " + this.state.is_dialog_active);
    if (delete_status === true) {
      // and here do other FK models deletion
      this.props.deletePosition(this.state.job_post_id);
    }
    this.setState({ ...this.state, is_dialog_active: false }); //open confirm dialog
  };

  removePermanently = (jobPostingID) => {
    console.log("In Remove Permanently: " + jobPostingID);
    this.setState({
      ...this.state,
      is_dialog_active: true,
      job_post_id: jobPostingID,
    }); //open confirm dialog
    console.log("In Remove Permanently: " + this.state.job_post_id);
    console.log("In Remove Permanently: " + this.state.is_dialog_active);
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
    var junkIDs = new Array();
    var junkpageCards = new Array();
    var junkPagePositionCards = new Array();

    this.props.jobStatus.map((status) => {
      junkpageCards = this.props.jobStatus.filter(
        (status) => status.is_deleted == 1
      );
    });
    for (var i = 0; i < junkpageCards.length; i++) {
      junkIDs[i] = junkpageCards[i].job_posting_reference;
    }
    this.props.jobPositions.map((position) => {
      junkPagePositionCards = this.props.jobPositions.filter((position) =>
        junkIDs.includes(position.id)
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
        <ResponsiveDialog
          is_active={this.state.is_dialog_active}
          send_response_to_parent={this.userConfirmationResponse}
        />
        <div className="container" style={{ minWidth: "100%" }}>
          <div className="row justify-content-end"></div>
          <div className="row">
            {junkPagePositionCards
              ? junkPagePositionCards.map((position) => (
                  <div
                    className="col-12 col-sm-6 col-md-6 col-lg-4"
                    key={position.id}
                  >
                    <ProgressCard
                      deleteCardPermanently={this.removePermanently}
                      restoreCard={this.restore}
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
  // jobDescription: state.jobDescriptionReducer.job_description,
  // shortlistedCandidates:
  //   state.shortlistedCandidatesReducer.shortlisted_candidates,
  // files: state.files.files,
});

export default withRouter(
  connect(mapStateToProps, {
    getPositions,
    deletePosition,
    getJobPostingStatus,
    modifyJobPostingStatus,
    deleteFile,
    deleteJobDescription,
    deleteJobPostingStatus,
    deleteShortlistedCandidate,
  })(Junkyard)
);
