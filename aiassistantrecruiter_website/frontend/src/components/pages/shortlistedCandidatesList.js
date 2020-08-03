import React, { Component } from "react";

import ComplexGrid from "../gridComponent/candidateResultGrid";
import Grid from "@material-ui/core/Grid";

import GuideMsg from "../guideComponent/guidanceMessage";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getShortlistedCandidates } from "../../actions/shortlistedCandidatesActions";

// import defaultImage from "../../../../assets/img/default.jpg";
import defaultImage from "../../../../assets/img/default.png";

import CandidateSkeleton from "../skeletonComponents/candidateSkeleton";

class ShortlistedCandidatesList extends Component {
  static propTypes = {
    shortlistedCandidates: PropTypes.array.isRequired,
    getShortlistedCandidates: PropTypes.func.isRequired,
  };

  state = {
    isLoading: true,
    job_posting_accessed: "",
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.setState({
      job_posting_accessed: params.job_posting_id,
    }),
      this.props.getShortlistedCandidates();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shortlistedCandidates !== this.props.shortlistedCandidates) {
      this.setState({ ...this.state, isLoading: false });
      console.log(this.state);
    }
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
          <GuideMsg location="SHORTLISTED CANDIDATES' LIST" />

          <Grid container direction="row" justify="center" alignItems="center">
            <CandidateSkeleton />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <CandidateSkeleton />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <CandidateSkeleton />
          </Grid>
        </div>
      );
    }

    var shortlisted_candidate_wrt_job_posting = new Array();

    this.props.shortlistedCandidates.map((shortlisted_candidate) => {
      shortlisted_candidate_wrt_job_posting = this.props.shortlistedCandidates.filter(
        (shortlisted_candidate) =>
          shortlisted_candidate.job_posting_reference ==
          this.state.job_posting_accessed
      );
    });

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
        <GuideMsg location="SHORTLISTED CANDIDATES' LIST" />
        {shortlisted_candidate_wrt_job_posting.map((shortlistedCandidate) => (
          <div key={shortlistedCandidate.id}>
            <ComplexGrid
              candidate_id={shortlistedCandidate.id}
              candidate_image={defaultImage}
              candidate_name={shortlistedCandidate.candidate_name}
              candidate_email={shortlistedCandidate.candidate_email}
              candidate_phone={shortlistedCandidate.candidate_phone}
              candidate_institute={shortlistedCandidate.candidate_institute}
              candidate_degree={shortlistedCandidate.candidate_degree}
              candidate_cgpa={shortlistedCandidate.candidate_cgpa}
              candidate_match={shortlistedCandidate.candidate_match}
              candidate_location={shortlistedCandidate.candidate_location}
              candidate_gender={shortlistedCandidate.candidate_gender}
              candidate_resume_path={shortlistedCandidate.candidate_resume_path}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  shortlistedCandidates:
    state.shortlistedCandidatesReducer.shortlisted_candidates,
});

export default connect(mapStateToProps, { getShortlistedCandidates })(
  ShortlistedCandidatesList
);
