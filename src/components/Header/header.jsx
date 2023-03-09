import React from "react";
import './Header.css';
import  settings  from '../../images/settings-icon.png'; 

const Header = () => { 
 return (
  <div>
    <img className="settings_icon" src={settings} alt="settings icon"></img>
  </div>
 )
 }

 export default Header