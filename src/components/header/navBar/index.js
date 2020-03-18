import React, { useState } from "react";
import User from "../user";
import Logo from "../logo";
import TabBar from "../tabBar";
import Mail from "../mail";
import user from "../../../assets/images/img6.jpeg";
import menu from "../../../assets/svgs/menu.svg";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(prevState => !prevState);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Logo />
        <button className="menu-button" onClick={toggleHandler}>
          <img className="menu-img" src={menu} />
        </button>
        <TabBar toggle={toggle} toggleHandler={toggleHandler} />
      </div>
      <div className="navbar-right">
        <Mail />
        <User source={user} />
      </div>
    </div>
  );
};

export default NavBar;
