import React from "react";

import StopWatchTable from '../stop-watch/stopwatchTable';
import ButtonBlock from "../Button-block/button-block";

const StopWatchContainer = ()=>{
   
    return(
        <section className="stopwatch-section">
                <div className='container stopwatch-container'>
                    <div className="stopwatch-block">
                        <h2 className="stopwatch-block-title">Stopwatch</h2>
                        <ButtonBlock />
                        <StopWatchTable  />
                    </div>

                </div>
            </section>
    )
}

export default StopWatchContainer