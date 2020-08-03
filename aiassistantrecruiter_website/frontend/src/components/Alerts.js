import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

import { connect } from "react-redux";
import PropTypes from "prop-types";
class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.msg.username) {
        alert.error(`Username: ${error.msg.username.join()}`);
      }
      if (error.msg.password) {
        alert.error(`Password: ${error.msg.password.join()}`);
      }
      if (error.msg.non_field_errors) {
        alert.error(`${error.msg.non_field_errors.join()}`);
      }
    }

    if (message !== prevProps.message) {
      if (message.addJobPosting) alert.success(message.addJobPosting);
      if (message.jobPostingMoved) alert.success(message.jobPostingMoved); //instead using this alternative; same msg on each action
      if (message.jobPostingAlgorithmStarted)
        alert.success(message.jobPostingAlgorithmStarted);
      if (message.jobPostingAlgorithmFinished)
        alert.success(message.jobPostingAlgorithmFinished);
      if (message.jobPostingAlgorithmError)
        alert.error(message.jobPostingAlgorithmError);
      if (message.uploadSuccessful) alert.success(message.uploadSuccessful);
      if (message.help_success) alert.success(message.help_success);
      if (message.help_error) alert.error(message.help_error);

      if (message.emailSent) alert.success(message.emailSent);
      if (message.emailFailed) alert.error(message.emailFailed);

      if (message.msgSent) alert.success(message.msgSent);
      if (message.msgFailed) alert.error(message.msgFailed);

      // if (message.emailSent) alert.success(message.emailSent);
      // if (message.emailFailed) alert.error(message.emailFailed);

      if (message.profile_update_success)
        alert.success(message.profile_update_success);
      if (message.profile_update_failure)
        alert.error(message.profile_update_failure);
      if (message.profile_update_canceled)
        alert.success(message.profile_update_canceled);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errorsReducer,
  message: state.messagesReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
