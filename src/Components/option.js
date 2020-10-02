import React from "react";

const Option = (props) => (
  <div className="optionList">
    <p className="optionList__item">
      {props.count}. {props.optionText}
    </p>

    <button
      className="button button--link"
      onClick={(event) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
