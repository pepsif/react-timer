import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './state/state';
import timerState from "./state/timer-state";

const root = ReactDOM.createRoot(document.getElementById('root'));


const rerenderTree = () => {
  root.render(
      <React.StrictMode>
        <App state={state} timerState={timerState}/>
      </React.StrictMode>
  );
}

rerenderTree( )

export default rerenderTree

  
