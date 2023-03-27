import React from 'react';
import './App.css';
import Clock from './components/clock/clock';
import StopWatchContainer from './components/stop-watch/StopWatchContainer';
import Timer from './components/timer/timer';
import {DarkThemeButton as ThemeButton} from "./components/DarkThemeButton/DarkThemeButton";
import { useSelector } from "react-redux";

function App() {
const body = document.querySelector("body"); 
const ligtOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);
if(ligtOnOffValue === true ) {
   
  body.style.backgroundColor = "rgba(2,0,36, 0.6)"
} else { body.style.backgroundColor = "rgba(196, 196, 196, 0.2)" }

console.log(ligtOnOffValue);

    return (
        <div className="clock-box">
            <ThemeButton />
            <Clock />
            <StopWatchContainer /> 
            <Timer /> 
        </div>
    );
}

export default App

