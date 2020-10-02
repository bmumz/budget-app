import React from "react";

const Action = (props) => (
  <button
    className="big-button"
    onClick={props.handlePick}
    disabled={!props.hasOptions}
  >
    Make a decision
  </button>
);

export default Action;
