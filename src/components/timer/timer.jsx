import "./timer.css";
import  click  from '../../assets/sounds/flamenco-click.wav';
import click2 from '../../assets/sounds/game-ready-button-fx_D_major.wav';
import endTimerMelody from '../../assets/sounds/lo-fi-bell-melody-lonely.wav';
import { useSelector, useDispatch } from "react-redux";
import { setTimerStarter, setTimerMinute, setTimerSeconds, } from "../../redux/slices/timerSlice";
import { useEffect } from "react";

 const Timer = () => {
  const timerStarter = useSelector((state) => state.timer.timerStarter);
  const timerMinute = useSelector((state) => state.timer.timerMinute);
  const timerSecond = useSelector((state) => state.timer.timerSecond);
  const dispatch = useDispatch();

  const Click = new Audio(click);
  const Click2 = new Audio(click2);
  const EndTimerMelody = new Audio(endTimerMelody)


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
        // alert("timer stop");
        dispatch(setTimerSeconds(0));
        EndTimerMelody.play()
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timerStarter, timerSecond, endTimerMelody,dispatch,timerMinute]);

  const timerIncrease = () => {
    dispatch(setTimerMinute(timerMinute + 1));
    Click.play()
  };

  const timerDecrease = () => {
    if (timerMinute === 0) return;
    dispatch(setTimerMinute(timerMinute - 1));
    Click.play()
  };

  const timerStart = () => {
    if (timerStarter) return;
    dispatch(setTimerStarter(true));
   Click2.play()
  };

  return (
    <section className="timer-section">
     
        <div className="timer-block">
          <h3 className="timer-title">timer</h3>
          <div className="timer-button-block">
            <button className="button up" onClick={ timerIncrease }> + </button>
            <button className={(timerStarter) ? "button start start-active" : "button start" } onClick={ timerStart }> start </button>
           <button className="button down" onClick={ timerDecrease} > - </button>
            
          </div>
          <div className="timer-count">
            {timerMinute < 10 ? "0" + timerMinute : timerMinute} : {timerSecond < 10 ? "0" + timerSecond : timerSecond}
             
          </div>
        </div>
     
    </section>
  );
};


export default Timer;