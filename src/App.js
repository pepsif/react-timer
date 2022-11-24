import React from 'react';
import './App.css';
import ButtonBlock from "./components/Button-block/button-block";
import Clock from './components/clock/clock';
import StopWatchTable from './components/stop-watch/stopwatch';
import Timer from './components/timer/timer';

function App(props) {
    return (
        <div className="body_inner">
            <Clock state={props.state} />
            <section className="stopwatch-section">
                <div className='container stopwatch-container'>
                    <div className="stopwatch-block">
                        <ButtonBlock state={props.state} />
                        <StopWatchTable state={props.state} />
                    </div>

                </div>
            </section>
            <Timer state={props.timerState}/>

        </div>
    );
}

export default App

