import React from "react";
import './stopwatch.css'

function StopWatchTable(props) {
    return (
        <section className="stopwatch-table ">
            <p className="stopwatch">{props.state.stopwatchDisplay}</p>
        </section>
    )
}

export default StopWatchTable