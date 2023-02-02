import React from 'react';
import './App.css';

import Clock from './components/clock/clock';
import StopWatchContainer from './components/stop-watch/StopWatchContainer';
import Timer from './components/timer/timer';

function App(props) {
    return (
        <div className="body_inner">
            <Clock state={props.state} />
            <StopWatchContainer state={props.state}/>
            <Timer state={props.timerState}/>

        </div>
    );
}

export default App

