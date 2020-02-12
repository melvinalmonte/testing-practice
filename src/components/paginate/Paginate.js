import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button name={props.btnTitle} onClick={props.btnAction}>
    {props.btnTitle}
  </button>
);

export const Paginate = props => {
  return (
    <div>
      <h1>
        {props.initPage} of {props.lastPage}
      </h1>
      <Button btnTitle="first" btnAction={props.first} />
      <Button btnTitle="prev" btnAction={props.prev} />
      <Button btnTitle="next" btnAction={props.next} />
      <Button btnTitle="last" btnAction={props.last} />
    </div>
  );
};

Button.propTypes = {
  btnAction: PropTypes.func,
  btnTitle: PropTypes.string
};

Paginate.propTypes = {
  initPage: PropTypes.number,
  lastPage: PropTypes.number,
  first: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
  last: PropTypes.func
};
