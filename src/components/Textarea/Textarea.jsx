import React from "react";
import PropTypes from "prop-types";
import "./textarea.scss";

const Textarea = ({ id, className, name, rows, cols, value, onChange }) => {
  return (
    <textarea
      id={id}
      className={`textareaEle ${className}`}
      name={name}
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
    />
  );
};

Textarea.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  id: "",
  className: "",
  name: "",
  rows: 4,
  cols: 50,
  value: "",
  onChange: () => {},
};

export default Textarea;
