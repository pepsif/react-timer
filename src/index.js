import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './state/state';


const root = ReactDOM.createRoot(document.getElementById('root'));


const rerenderTree = () => {
  root.render(
      <div>
        <App state={state} />
      </div>
  );
}

rerenderTree()

export default rerenderTree

  
