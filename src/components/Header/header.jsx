import React from "react";
import "./Header.css";
import settings from "../../images/settings-icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img className="settings_icon" src={settings} alt="settings icon"></img>
      </div>
    </div>
  );
};

export default Header;
