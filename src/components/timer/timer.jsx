import React from "react";
import "./timer.css";

const Timer = () => {
  const [timer, setTimer] = React.useState(0);
  let timerMinutes = 0;
  let timerSeconds = 59;
  let timerDisplay = `${timer} : ${timerSeconds}`;

  const timerIncrease = () => {
    setTimer(timer + 1);
    timerMinutes = timer;
  };

  const timerDecrease = () => {
    if (timer === 0) return;
    setTimer(timer - 1);
    timerMinutes = timer;
  };
  const timerStart = () => {};

  return (
    <section className="timer-section">
      <span style={{ backgroundColor: "red" }}>{timerDisplay}</span>
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
          <span className="timer-count"> {timer<10 ? "0"+ timer : timer} : 00</span>
        </div>
      </div>
    </section>
  );
};

export default Timer;
