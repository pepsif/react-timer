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
                    <ButtonBlock state={props.state} />
                    <StopWatchTable state={props.state} />
                </div>
            </section>
            <Timer state={props.state}/>

        </div>
    );
}

export default App

