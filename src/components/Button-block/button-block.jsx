import React from "react";

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
            <div className="container">
                <button className="button on" onClick={startTimer} >Start</button>
                <button className="button off"  onClick={stopTimer} >Pause</button>
                <button className="button reset"  onClick={resetTimer} >Reset</button>
            </div>

        </div>

    )
}

export default ButtonBlock