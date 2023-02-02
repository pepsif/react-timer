import React from "react";

import StopWatchTable from '../stop-watch/stopwatch';
import ButtonBlock from "../Button-block/button-block";

const StopWatchContainer = (props)=>{
    return(
        <section className="stopwatch-section">
                <div className='container stopwatch-container'>
                    <div className="stopwatch-block">
                        <h2 className="stopwatch-block-title">Stopwatch</h2>
                        <ButtonBlock state={props.state} />
                        <StopWatchTable state={props.state} />
                    </div>

                </div>
            </section>
    )
}

export default StopWatchContainer