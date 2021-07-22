import React from "react";
import PropTypes from "prop-types";
import "./label.scss";

const Label = ({ id, className, text }) => {
  return (
    <label id={id} className={className}>
      {text}
    </label>
  );
};

Label.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {
  id: "",
  className: "",
  text: "Label",
};

export default Label;
