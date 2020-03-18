import React from "react";
import mail from "../../../assets/svgs/envelope.svg";
import "./mail.css";

const Mail = () => {
  return (
    <div className="mail-container">
      <img className="mail-icon" src={mail} alt="mail" />
      <div className="mail-badge"/>
    </div>
  );
};

export default Mail;
