import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addHelp } from "../../actions/getHelpActions";

class TextBox extends Component {
  state = {
    title: "",
    description: "",
    help_type: "",
  };

  static propTypes = {
    addHelp: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.state.help_type = this.props.help_type;

    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.help_type);

    var title = this.state.title;
    var description = this.state.description;
    var help_type = this.state.help_type;

    const newHelp = {
      title,
      description,
      help_type,
    };

    this.props.addHelp(newHelp);
    // console.log("Submitted Successfully!");
    // alert("Submitted Successfully!"); react-alert added so no need for browser alert
    this.setState({
      title: "",
      description: "",
      help_type: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, description } = this.state;

    return (
      <div className="container-fluid" id="pageContainer">
        <form
          onSubmit={this.onSubmit}
          noValidate
          className="border shadow-sm p-3 mb-5 bg-white rounded"
        >
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
              <input
                id="title"
                name="title"
                type="text"
                className="form-control"
                placeholder="Mention the area of application"
                className="form-control"
                onChange={this.onChange}
                value={title}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <textarea
                style={{
                  minWidth: "100px",
                  maxWidth: "100%",
                  minHeight: "50px",
                  height: "100%",
                  width: "100%",
                }}
                id="description"
                name="description"
                onChange={this.onChange}
                className="form-control"
                value={description}
                className="form-control col-sm-10"
                id="exampleFormControlTextarea1"
                placeholder="Write a note"
                col="200"
                rows="6"
              ></textarea>
            </div>
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { addHelp })(TextBox);
