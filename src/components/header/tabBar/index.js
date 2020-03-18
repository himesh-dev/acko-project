import React, { useState } from "react";
import Tab from "./tab";
import "./tabBar.css";

const tabs = ["Schedule", "Overview", "Articles"];
const TabBar = props => {
  const [activeTab, setActiveTab] = useState("Schedule");
  const { toggle, toggleHandler } = props;
  const onClickHandler = item => {
    setActiveTab(item);
    toggleHandler();
  };
  return (
    <div className={`tabBar ${toggle ? `toggle` : ""}`}>
      {tabs.map(item => {
        return (
          <Tab
            key={item}
            label={item}
            active={activeTab}
            onClick={() => onClickHandler(item)}
          />
        );
      })}
    </div>
  );
};

export default TabBar;
