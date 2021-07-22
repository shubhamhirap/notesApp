import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ type, id, className, label, onClick, disabled }) => {
  return (
    <button
      type={type}
      id={id}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "",
  id: "",
  className: "",
  label: "Button",
  onClick: () => {},
};

export default Button;
