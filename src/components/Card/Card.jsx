import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = ({ id, className, children }) => {
  return (
    <div id={id} className={`card ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  id: "",
  className: "",
  children: null,
};

export default Card;
