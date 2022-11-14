import React from "react";

function ButtonBlock(props) {
    const startButton = React.createRef();
    const stopButton = React.createRef();
    const resetButton = React.createRef();

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
                <button className="button on" ref={startButton} onClick={startTimer}>Start</button>
                <button className="button off" ref={stopButton} onClick={stopTimer}>Pause</button>
                <button className="button reset" ref={resetButton} onClick={resetTimer}>Reset</button>
            </div>

        </div>

    )
}

export default ButtonBlock