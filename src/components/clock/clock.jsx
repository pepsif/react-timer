import React from "react";
import "./clock.css";


function Clock() {
 const [ hours, setHours ] = React.useState(0);
 const [ minutes, setMinutes ] = React.useState(0);
 const [ seconds, setSeconds ] = React.useState(0);

  setInterval( () => {  
   const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  setHours(hours);
  setMinutes(minutes)

  },1000)
  
  return (
    <section className="clock-block">
      <div className="container clock-container">
        <div className="clock-table">
          <div className="number-block">{hours}:{minutes}</div>
          <div className="alarm-block">
            <img className="bell-icon" src={require("../../images/bell.jpg")} alt="bell-icon" ></img>
            <span className="alarm-day">alarm</span>
            <img className="settings-icon" src={require("../../images/settings.png")} alt="settings icon" ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clock;
