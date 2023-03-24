import React from 'react';
import './App.css';
import Clock from './components/clock/clock';
import StopWatchContainer from './components/stop-watch/StopWatchContainer';
import Timer from './components/timer/timer';
import {DarkThemeButton} from "./components/DarkThemeButton/DarkThemeButton";
function App(props) {

    return (
        <div className="clock-box">
            <DarkThemeButton />
            <Clock />
            <StopWatchContainer /> 
            <Timer /> 
        </div>
    );
}

export default App

