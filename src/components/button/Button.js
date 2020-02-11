import React from "react";
import PropTypes from "prop-types";

export const Button = props => {
  const { btnTitle, btnAction } = props;

  return (
    <button name={btnTitle} onClick={btnAction}>
      {btnTitle}
    </button>
  );
};

Button.propTypes = {
  btnAction: PropTypes.func,
  btnTitle: PropTypes.string
};
