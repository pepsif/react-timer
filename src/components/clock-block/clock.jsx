import React from "react";
import './clock.css'

function Clock( props ) {
    return(
      <div className="clock-block">
       <div className="container clock-container">
         <p className="clock-table">{props.state.clockHours}:{props.state.clockMinutes}</p>
       </div>
       
      </div> 
    )
}

export default Clock