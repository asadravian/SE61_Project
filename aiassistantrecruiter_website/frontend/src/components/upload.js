import React, { Component } from "react";
import { sendFilesToServer, addFile } from "../actions/fileActions";
import { updatePosition } from "../actions/jobPositionActions";
import { connect } from "react-redux"; //we only use braces if the fucntion is not a default export
import axios from "axios";
import PropTypes from "prop-types";

class Upload extends Component {
  state = {
    files: null,
  };

  static propTypes = {
    current_user_id: PropTypes.number.isRequired,
    // job_postings: PropTypes.array.isRequired,
  };

  onChange = (e) => {
    this.setState({
      files: e.target.files,
    });
  };

  updateJobPosting(number_of_applications_uploaded) {
    console.log(
      "# of applications uploaded: " + number_of_applications_uploaded
    );
    console.log(this.props.job_postings);
    const index = this.props.job_postings.length - 1; // to get last job post index
    console.log("Job Posting ID: " + index);
    console.log(this.props.job_postings[index]); // access the last job post through the index found
    console.log(this.props.job_postings[index].id); //now get the id associated with the job post
    const job_post_id = this.props.job_postings[index].id;
    const jobPositionUpdates = {
      id: job_post_id,
      applicants_count: number_of_applications_uploaded,
      // user_reference: this.props.current_user_id,
    };
    console.log(jobPositionUpdates);

    // this.props.updatePosition(jobPositionUpdates, index); // Gives 404 Error by server need to resolve because there was a logical error. i was using index instead of id
    this.props.updatePosition(jobPositionUpdates, job_post_id); // congrats, now working
  }

  onSubmit = (e) => {
    e.preventDefault();

    var fileNames = new Array();
    console.log("Files Uploaded By User:");
    if (this.state.files.length != 0) {
      for (var i = 0; i < this.state.files.length; i++) {
        fileNames[i] = this.state.files[i].name;

        this.props.addFile(fileNames[i]);
      }

      this.updateJobPosting(this.state.files.length);
      console.log(this.state.files);

      // setting axios to look for csrf token sent by django
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

      // axios post request to send files to the server
      this.props.sendFilesToServer(this.state.files);
    } else {
      alert("Please select files to upload!");
    }
  };

  render() {
    return (
      <div>
        <form
          method="POST"
          onSubmit={this.onSubmit}
          encType="multipart/form-data"
        >
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="input-group-text"
                type="submit"
                id="inputGroupFileAddon01"
              >
                Upload
              </button>
            </div>
            <div className="custom-file">
              <input
                type="file"
                name="files"
                multiple
                onChange={this.onChange}
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                {this.state.files
                  ? this.state.files.length + " Files Selected"
                  : "Choose file"}
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  current_user_id: state.authReducer.user.id,
  job_postings: state.jobPositionReducer.positions,
});

export default connect(mapStateToProps, {
  sendFilesToServer,
  addFile,
  updatePosition,
})(Upload);
