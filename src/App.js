import React from 'react';
import './App.css';
import bg from './images/les_tuman_derevia.jpg'

import Clock from './components/clock/clock';
import StopWatchContainer from './components/stop-watch/StopWatchContainer';
import Timer from './components/timer/timer';

function App(props) {
    return (
        <div className="body_inner">
           <img className='bg-image' src={bg}></img>
            <Clock />
            <StopWatchContainer />
            <Timer />

        </div>
    );
}

export default App

