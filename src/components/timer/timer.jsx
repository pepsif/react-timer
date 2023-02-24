import React from "react";
import "./timer.css";

import { useSelector, useDispatch } from "react-redux";
import {
  setTimerStarter,
  setTimerMinute,
  setTimerSeconds,
} from "../../redux/slices/timerSlice";

import { useEffect } from "react";

const Timer = () => {
  const timerStarter = useSelector((state) => state.timer.timerStarter);
  const timerMinute = useSelector((state) => state.timer.timerMinute);
  const timerSecond = useSelector((state) => state.timer.timerSecond);
  const dispatch = useDispatch();

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (timerStarter === false) clearInterval(interval);
      
      {
        timerStarter && dispatch(setTimerSeconds(timerSecond - 1));
      }
      if (timerStarter && timerMinute > 0 && timerSecond === 0) {
        dispatch(setTimerMinute(timerMinute - 1));
        dispatch(setTimerSeconds(59));
      }
      if (timerStarter && timerMinute === 0 && timerSecond === 0) {
        clearInterval(interval);
        dispatch(setTimerStarter(false));
        alert("timer stop");
        dispatch(setTimerSeconds(0));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timerStarter, timerSecond]);

  const timerIncrease = () => {
    dispatch(setTimerMinute(timerMinute + 1));
  };

  const timerDecrease = () => {
    if (timerMinute === 0) return;
    dispatch(setTimerMinute(timerMinute - 1));
  };

  const timerStart = () => {
    if (timerStarter) return;
    dispatch(setTimerStarter(true));
   
  };

  return (
    <section className="timer-section">
      <div className="container timer-container">
        <div className="timer-block">
          <h3 className="timer-title">timer</h3>
          <div className="timer-button-block">
            <button className="button up" onClick={ timerIncrease }> + </button>
            <button className="button start" onClick={ timerStart }> start </button>
           <button className="button down" onClick={ timerDecrease} > - </button>
            
          </div>
          <span className="timer-count">
            
            {timerMinute < 10 ? "0" + timerMinute : timerMinute}:
            {timerSecond < 10 ? "0" + timerSecond : timerSecond}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Timer;
