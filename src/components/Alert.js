import React from "react";
import PropTypes from "prop-types";
import "../styles/Alert.css";

function Alert({ message, success }) {
  if (!message) return null;
  return (
    <div className={`alert-${success ? "success" : "error"}`}>{message}</div>
  );
}

export default Alert;
Alert.defaultProps = {
  success: false,
};
Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
