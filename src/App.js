import React, { useEffect } from "react";
import "./App.css";
import Clock from "./components/clock/clock";
import StopWatchContainer from "./components/stop-watch/StopWatchContainer";
import Timer from "./components/timer/timer";
import { DarkThemeButton as ThemeButton } from "./components/DarkThemeButton/DarkThemeButton";
import { useSelector } from "react-redux";

function App() {
  

  useEffect(() => {
const body = document.querySelector("body");
 const mainBlocks = document.querySelector(".clock-box");
 const buttons = document.querySelectorAll("button")

 console.log(buttons)
 
        //  --ON--
    if (ligtOnOffValue === true) {
      body.style.backgroundColor = "rgb(29 29 30 / 92%)";
      body.style.color = "#908879fa";
       for(let i=1; i<=3;i++) {
        mainBlocks.children[i].style.boxShadow = "2px 2px 2px red";
      
       }
       for(let i=0; i<buttons.length;i++) {
        buttons[i].style.boxShadow = "rgb(46 46 47) 23px 23px 46px, -1px -1px 0px red";
        buttons[i].style.backgroundColor = "#8e8678";
       }
       
        // -OFF-
    } else {
      body.style.backgroundColor = "rgba(196, 196, 196, 0.2)";
      body.style.color = "black";
      for(let i=1; i<=3;i++) {
      mainBlocks.children[i].style.boxShadow = '23px 23px 46px #BEBEBE, -23px -23px 46px #FFFFFF';

      }
      for(let i=0; i<buttons.length;i++) {
        buttons[i].style.boxShadow = "5px 5px 10px #bcbcbc, -5px -5px 10px #ffffff";
        buttons[i].style.backgroundColor="#E0E0E0"
       }
    }

    // console.log(mainBlocks)
  });

  const ligtOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);

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
