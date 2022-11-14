import React from "react";

function StopWatchTable( props ) {
    return(
        <section className="stop-watch-table">
            <div className="container">
                <p className="timer">{props.state.minutes}:{props.state.seconds}</p>
            </div>

        </section>
    )
}

export default StopWatchTable