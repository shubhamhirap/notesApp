import React from "react";
import PropTypes from "prop-types";
import "./form.scss";

const Form = ({ children }) => {
  return <form className={`form`}>{children}</form>;
};

Form.propTypes = {
  children: PropTypes.node,
};

Form.defaultProps = {
  children: null,
};

export default Form;
