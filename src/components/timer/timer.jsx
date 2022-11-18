import React from "react";
import './timer.css'

const Timer = ( props ) => {

const up = () => {
props.state.timerMinutes++
console.log(props.state.timerMinutes++)
}


  return (
    <section className="timer-section">
      <div className="container timer-container">
        <div className="timer-block">
          <div className="timer-button-block">
            <button className="button up" onClick={ up }>up</button>
            <button className="button down">down</button>
          </div>

          <span className="timer-count">0</span>


        </div>
      </div>

    </section>
  )
}

export default Timer