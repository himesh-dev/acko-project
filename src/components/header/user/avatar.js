import React from "react";

const Avatar = props => {
  return props.source !== "" ? (
    <img className="user-avatar" src={props.source} alt="user" />
  ) : (
    <span className="user-avatar empty">+6</span>
  );
};

export default Avatar;
