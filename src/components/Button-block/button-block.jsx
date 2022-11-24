import React from "react";
import './button-block.css'

function ButtonBlock(props) {

    const startTimer = () => {
        props.state.startTimer()
    }
    const stopTimer = () => {
        props.state.stopTimer()
    }
    const resetTimer = () => {
        props.state.resetTimer()
    }
    return (

        <div className="button-block">
            <button className="button on" onClick={startTimer}>Start</button>
            <button className="button off" onClick={stopTimer}>Pause</button>
            <button className="button reset" onClick={resetTimer}>Reset</button>
        </div>

    )
}

export default ButtonBlock