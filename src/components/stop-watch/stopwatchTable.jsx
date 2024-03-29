import React, { useEffect } from "react";
import "./stopwatch.css";
import { useSelector, useDispatch } from "react-redux";
import {
  updateStopwatchMinutes,
  updateStopwatchSeconds,
  setStopwatchSeconds

} from "../../redux/slices/stopwatchSlice";

function StopWatchTable() {
  const dispatch = useDispatch();
  const stopwatchStarter = useSelector(
    (state) => state.stopwatch.stopwatchStarter
  );

  const minutes = useSelector((state) => state.stopwatch.minute);
  const seconds = useSelector((state) => state.stopwatch.second);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stopwatchStarter === false) clearInterval(interval);
      if (stopwatchStarter === true) {
        dispatch(updateStopwatchSeconds());
      }
      if(seconds === 59 ) {
       dispatch(updateStopwatchMinutes());
       dispatch(setStopwatchSeconds(0))
      }

    //   console.log("stopwatch table");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="stopwatch-table ">
     {minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
}

export default StopWatchTable;
