import React from "react";
import './stopwatch.css'

function StopWatchTable( props ) {
    return(
        <section className="stopwatch-table ">
            <div className="container ">
                <p className="timer">{props.state.minutes}:{props.state.seconds}</p>
            </div>

        </section>
    )
}

export default StopWatchTable