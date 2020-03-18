import React from "react";

const Tab = props => {
  const { active, label } = props;
  return (
    <div
      className={`tab ${active == label ? `active` : ""}`}
      onClick={props.onClick}
    >
      <p className="tab-label">{props.label}</p>
    </div>
  );
};

export default Tab;
