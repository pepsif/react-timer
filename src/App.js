import React from 'react';
import './App.css';
import Clock from './components/clock/clock';
import Header from './components/Header/Header';
import StopWatchContainer from './components/stop-watch/StopWatchContainer';
import Timer from './components/timer/timer';

function App(props) {
  

    return (
        <div className='container'>
            <Header />
            <Clock />
            <StopWatchContainer />
            <Timer />

        </div>
    );
}

export default App

