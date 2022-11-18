import React from "react";
import './clock.css'

function Clock(props) {
  return (
    <section className="clock-block">
      <div className="container clock-container">
        <div className="clock-table">
          <div className="number-block">{props.state.clockHours}:{props.state.clockMinutes}</div>
          <div className="alarm-block">
            <img className="bell-icon" src={require("../../images/bell.jpg")} alt="bell-icon"></img>
            <span className="alarm-day">{props.state.currentDay}</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Clock