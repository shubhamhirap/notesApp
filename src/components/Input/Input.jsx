import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({ type, id, className, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      className={`inputElement ${className}`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  id: "",
  className: "",
  onChange: () => {},
  placeholder: "",
};

export default Input;
