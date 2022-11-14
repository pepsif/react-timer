import React from "react";
import './header.css'

function Header() {
    return (
        <header className="App-header">
           <div className="container header-container">
              
               <ul className="menu-list">
                   <li className="menu-item">Clock</li>
                   <li className="menu-item">Timer</li>
                   <li className="menu-item">Stopwatch</li>
               </ul>
           </div>

        </header>
    );
}

export default Header

