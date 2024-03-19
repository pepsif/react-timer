import React from "react";
import './button-block.css';

import { useSelector, useDispatch } from "react-redux";
import { setStopwatchStarter,  setStopwatchReset } from '../../redux/slices/stopwatchSlice';

// import  click  from '../../assets/sounds/flamenco-click.wav';
import click2 from '../../assets/sounds/game-ready-button-fx_D_major.wav';
import clear from '../../assets/sounds/short-beep_C_major.wav'

function ButtonBlock() {
    const dispatch = useDispatch();

    // let Click = new Audio(click);
    let Click2 = new Audio(click2);
    let Clear = new Audio(clear);

    // const stopwatchStarter = useSelector(( state ) => state.stopwatch.stopwatchStarter);
    // const stopwatchSeconds = useSelector((state) => state.stopwatch.second);

    // const ligtOnOffValue = useSelector((state) => state.darkTheme.darkThemeOnOff);
  const stopWatchStarter = useSelector(state => state.stopwatch.stopwatchStarter);

       const stopwatchStart = (el) => {
       dispatch(setStopwatchStarter(true))
       el.target.classList.toggle("active");
       Click2.play()
      };
      const stopwatchReset = () => {
        dispatch(setStopwatchReset())
        Clear.play()
      }

    return (

        <div className="button-block">
            <button className={ (stopWatchStarter === true ) ? "button start-stop start-stop-active" : "button start-stop"  } onClick={el =>  stopwatchStart(el) } >Start / Stop</button>

            <button className="button reset" onClick={ stopwatchReset }>Reset</button>
        </div>

    )
}
export default ButtonBlock