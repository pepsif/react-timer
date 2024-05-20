import "./timer.css";
import {motion} from "framer-motion";
import click from '../../assets/sounds/flamenco-click.wav';
import click2 from '../../assets/sounds/game-ready-button-fx_D_major.wav';
import endTimerMelody from '../../assets/sounds/lo-fi-bell-melody-lonely.wav';
import { useSelector, useDispatch } from "react-redux";
import { setTimerStarter, setTimerMinute, setTimerSeconds } from "../../redux/slices/timerSlice";
import { useEffect, useMemo } from "react";

const Timer = () => {
  const timerStarter = useSelector((state) => state.timer.timerStarter);
  const timerMinute = useSelector((state) => state.timer.timerMinute);
  const timerSecond = useSelector((state) => state.timer.timerSecond);
  const dispatch = useDispatch();

  const Click = useMemo(() => new Audio(click), []);
  const Click2 = useMemo(() => new Audio(click2), []);
  const EndTimerMelody = useMemo(() => new Audio(endTimerMelody), []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timerStarter) clearInterval(interval);

      if (timerStarter && timerSecond > 0) {
        dispatch(setTimerSeconds(timerSecond - 1));
      } else if (timerStarter && timerMinute > 0 && timerSecond === 0) {
        dispatch(setTimerMinute(timerMinute - 1));
        dispatch(setTimerSeconds(59));
      } else if (timerStarter && timerMinute === 0 && timerSecond === 0) {
        clearInterval(interval);
        dispatch(setTimerStarter(false));
        dispatch(setTimerSeconds(0));
        EndTimerMelody.play();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timerStarter, timerSecond, timerMinute, dispatch, EndTimerMelody]);

  const timerIncrease = () => {
    dispatch(setTimerMinute(timerMinute + 1));
    Click.play();
  };

  const timerDecrease = () => {
    if (timerMinute === 0) return;
    dispatch(setTimerMinute(timerMinute - 1));
    Click.play();
  };

  const timerStart = () => {
    if (timerStarter) return;
    dispatch(setTimerStarter(true));
    Click2.play();
  };

  return (
    <motion.section className="timer-section"
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{delay:2, duration: 10}}
    >
      <div className="timer-block">
        <h3 className="timer-title">timer</h3>
        <div className="timer-button-block">
          <button className="button up" onClick={timerIncrease}>+</button>
          <button className={`button start ${timerStarter ? 'start-active' : ''}`} onClick={timerStart}>start</button>
          <button className="button down" onClick={timerDecrease}>-</button>
        </div>
        <div className="timer-count">
          {timerMinute < 10 ? "0" + timerMinute : timerMinute} : {timerSecond < 10 ? "0" + timerSecond : timerSecond}
        </div>
      </div>
    </motion.section>
  );
};

export default Timer;
