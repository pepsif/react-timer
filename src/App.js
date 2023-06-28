import React, { useEffect } from "react";
import "./App.css";
import Clock from "./components/clock/clock";
import StopWatchContainer from "./components/stop-watch/StopWatchContainer";
import Timer from "./components/timer/timer";
import { DarkThemeButton as ThemeButton } from "./components/DarkThemeButton/DarkThemeButton";


function App() {
 

  return (
    <div className="clock-box">
      <ThemeButton />
      <Clock />
      <StopWatchContainer />
      <Timer />
    </div>
  );
}

export default App;
