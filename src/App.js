import React from 'react';
import './App.css';
import ButtonBlock from "./components/Button-block/button-block";
import Clock from './components/clock-block/clock';
import StopWatchTable from './components/stop-watch-table/stop-watch-table';

function App(props) {
    return (
        <div className="body_inner">
            <Clock state={props.state}/>
            <ButtonBlock state={props.state}/>
            <StopWatchTable state={props.state}/>

        </div>
    );
}

export default App

