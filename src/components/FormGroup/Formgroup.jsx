import React from "react";
import PropTypes from "prop-types";
import "./formgroup.scss";

const Formgroup = ({ children }) => {
  return <div className={`formGroup`}>{children}</div>;
};

Formgroup.propTypes = {
  children: PropTypes.node,
};

Formgroup.defaultProps = {
  children: null,
};

export default Formgroup;
