import "./App.css";
import React from "react";
import Clock from "./components/clock/clock";
import StopWatchContainer from "./components/stop-watch/StopWatchContainer";
import Timer from "./components/timer/timer";
import {DarkThemeButton} from "./components/DarkThemeButton/DarkThemeButton";
import {useSelector} from "react-redux";


export default function App() {
    const lightOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);
    const root = document.getElementById("root");

    const darkStyle = {
        root: {
            backgroundColor: "rgb(29 29 30 / 92)",
            color: "rgba(144, 136, 121, 0.98)",
        },
        clockBox: {
            boxShadow: "rgb(230, 5, 5) 1px 1px 14px, rgb(230, 5, 5) -1px -1px 14px",
        },
        switch: {
            boxShadow: "rgb(230, 5, 5) 1px 1px 1px, rgb(230, 5, 5) -1px -1px 1px",
        },
        clockBlock: {
            boxShadow: "red 2px 2px 2px",
        },
        stopwachSection: {
            boxShadow: "red 2px 2px 2px",
        },
        timerSection: {
            boxShadow: "red 2px 2px 2px",
        },
        buttons: {
            boxShadow: "rgb(46, 46, 47) 23px 23px 46px, red -1px -1px 0px",
            backgroundColor: "rgb(142, 134, 120)",
        },
    }
    const lightStyle = {
        root: {
            backgroundColor: "rgba(196, 196, 196, 0.2)",
            color: "black",
        },
        clockBox: {
            boxShadow: "rgb(190, 190, 190) 17px 17px 34px, rgb(255, 255, 255) -17px -17px 34px",
        },
        switch: {
            backgroundColor: "#f3f3f3",
            boxShadow: "rgb(190, 190, 190) 4px 4px 10px, rgb(255, 255, 255) -4px -4px 10px",
        },
        clockBlock: {
            boxShadow: "rgb(190, 190, 190) 8px 8px 16px, rgb(255, 255, 255) -8px -8px 16px",
        },
        stopwachSection: {
            boxShadow: "rgb(190, 190, 190) 8px 8px 16px, rgb(255, 255, 255) -8px -8px 16px",
        },
        timerSection: {
            boxShadow: "rgb(190, 190, 190) 8px 8px 16px, rgb(255, 255, 255) -8px -8px 16px",
        },
        buttons: {
            boxShadow: "rgb(190, 190, 190) 4px 4px 10px, rgb(255, 255, 255) -4px -4px 10px",
            backgroundColor: "rgb(243, 243, 243)",
        },
    }

    // ON OF darkTheme root styles

    if (lightOnOffValue === true) {
        for (const [key, value] of Object.entries(darkStyle.root)) {
            root.style[key] = value;
        }
    } else {
        for (const [key, value] of Object.entries(lightStyle.root)) {
            root.style[key] = value;
        }
    }

    return (
        <div className="clock-box" style={lightOnOffValue ? darkStyle.clockBox : lightStyle.clockBox}>
            <DarkThemeButton darkStyle={darkStyle} lightStyle={lightStyle}/>
            <Clock darkStyle={darkStyle} lightStyle={lightStyle}/>
            <StopWatchContainer darkStyle={darkStyle} lightStyle={lightStyle}/>
            <Timer darkStyle={darkStyle} lightStyle={lightStyle}/>
        </div>
    );
}


