import React from "react";
import './timer.css'

const Timer = (props) => {


    const timerIncrease = () => {
        props.state.timerIncrease()
    }
    const timerDecrease = () => {
        props.state.timerDecrease()
    }
    const timerStart = () => {
        props.state.timerStart()
    }

    return (
        <section className="timer-section">
            <div className="container timer-container">
                <div className="timer-block">
                    <h3 className="timer-title">timer</h3>
                    <div className="timer-button-block">
                        <button className="button up" onClick={timerIncrease}>+</button>
                        <button className="button start" onClick={timerStart}>start</button>
                        <button className="button down" onClick={timerDecrease}>-</button>
                    </div>

                    <span className="timer-count">{props.state.timerDisplay}


           
          </span>


                </div>
            </div>

        </section>
    )
}

export default Timer