import React from "react";
import './button-block.css';

import { useSelector, useDispatch } from "react-redux";
import { setStopwatchStarter, setStopwatchPause, setStopwatchReset } from '../../redux/slices/stopwatchSlice';

function ButtonBlock() {
    const dispatch = useDispatch();
    const stopwatchStarter = useSelector(( state ) => state.stopwatch.stopwatchStarter);
    const stopwatchSeconds = useSelector((state) => state.stopwatch.second)

    console.log(stopwatchStarter,stopwatchSeconds)

    const stopwatchStart = (el) => {
       dispatch(setStopwatchStarter(true))
       el.target.classList.toggle("active");

      };
      const stopwatchReset = () => {
        dispatch(setStopwatchReset())
      }
    return (

        <div className="button-block">
            <button className="button on" onClick={el =>  stopwatchStart(el) } >Start / Stop</button>

            <button className="button reset" onClick={ stopwatchReset }>Reset</button>
        </div>

    )
}

export default ButtonBlock