import React from "react";
import "./timer.css";

const Timer = () => {
 
  const [timerMinute, setTimerMinute] = React.useState(0);
  const [ timerSecond, setTimerSecond] = React.useState(59)
  let timerStarter = false;
  let timerInterval = '';
    console.log(timerInterval)
   const timerIncrease = () => {
    setTimerMinute(timerMinute + 1);
    
  };

  const timerDecrease = () => {
    if (timerMinute === 0) return;
    setTimerMinute(timerMinute - 1);
    };
  const timerStart = () => {
    
    if(timerStarter === true) return
     timerStarter = true;
      
     timerInterval = setInterval(() => {
     
      setTimerSecond(timerSecond => {
          // console.log(timerSecond)

        if(timerSecond === 0) return "huy"
       return timerSecond - 1
      }
        )
      
    },1000)
  };

  return (
    <section className="timer-section">
      <span style={{ backgroundColor: "red",float: "right",fontSize:"2rem" }}>{timerMinute}:{timerSecond}</span>
      <div className="container timer-container">
        <div className="timer-block">
          <h3 className="timer-title">timer</h3>
          <div className="timer-button-block">
            <button className="button up"onClick={() => {timerIncrease()}}>+</button>
            <button className="button start" onClick={() => {timerStart()}}>start</button>
            <button className="button down" onClick={() => { timerDecrease(); }}>-</button>
           </div>   
           <span className="timer-count"> {timerMinute<10 ? "0"+ timerMinute : timerMinute} : { timerSecond < 10 ? "0" + timerSecond : timerSecond}</span> 
        </div>
            
      </div>        
    </section>        
   )
}             
             


export default Timer;
