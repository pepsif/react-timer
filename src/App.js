import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';


function App(props) {
    const startButton = React.createRef();
    const stopButton = React.createRef();
    const resetButton =React.createRef();

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
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <div className="button-block">
                        <button className="button on" ref={startButton} onClick={startTimer}>Start</button>
                        <button className="button off" ref={stopButton} onClick={stopTimer}>Stop</button>
                        <button className="button reset" ref={resetButton} onClick={resetTimer}>Reset</button>
                    </div>
                </header>

                <section>
                    <p className="timer">{props.state.minutes}:{props.state.seconds}</p>
                </section>
            </div>
        </BrowserRouter>
    );


}

export default App
