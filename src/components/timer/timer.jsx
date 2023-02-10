import React from "react";
import "./timer.css";

const Timer = () => {
  const [timerMinute, setTimerMinute] = React.useState(0);
  const [timerSecond, setTimerSecond] = React.useState(0);
  const [timerStarter, setTimerStarter] = React.useState(false);

  let timerInterval = "";
  console.log(timerInterval);
  const timerIncrease = () => {
    setTimerMinute(timerMinute + 1);
  };

  const timerDecrease = () => {
    if (timerMinute === 0) return;
    setTimerMinute(timerMinute - 1);
  };
  const timerStart = () => {
    if (timerMinute === 0 && timerSecond === 0 && timerStarter === false)
      return;
    if (timerStarter === true) return;
    setTimerStarter(true);
    setTimerSecond(59);
    setTimerMinute((timerMinute) => timerMinute - 1);

    timerInterval = setInterval(() => {
      setTimerSecond( (timerSecond) => {
        timerSecond-1
        // if (timerMinute === 0 && timerSecond === 0) {
        //   setTimerStarter(false);
        //   clearInterval(timerInterval);
        //   setTimerSecond(0);
        //   return;
        // }

        // if (timerMinute > 0 && timerSecond === 1) {
        //   setTimerMinute((timerMinute) => timerMinute - 1);
        //   setTimerSecond(0);
        // }
        
      });
    }, 1000);
  };

  return (
    <section className="timer-section">
      <div className="container timer-container">
        <div className="timer-block">
          <h3 className="timer-title">timer</h3>
          <div className="timer-button-block">
            <button
              className="button up"
              onClick={() => {
                timerIncrease();
              }}
            >
              +
            </button>
            <button
              className="button start"
              onClick={() => {
                timerStart();
              }}
            >
              start
            </button>
            <button
              className="button down"
              onClick={() => {
                timerDecrease();
              }}
            >
              -
            </button>
          </div>
          <span className="timer-count">
            {" "}
            {timerMinute < 10 ? "0" + timerMinute : timerMinute} :{" "}
            {timerSecond < 10 ? "0" + timerSecond : timerSecond}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Timer;
