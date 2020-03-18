import React from "react";
import "./user.css";
import Avatar from "./avatar";
const User = props => {
  return (
    <div className="user-container">
      <Avatar source={props.source} />
      <p className="user-name">Lauren Williams</p>
    </div>
  );
};

export default User;
