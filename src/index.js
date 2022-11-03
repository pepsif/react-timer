import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import state from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = () => {

  root.render(
      <React.StrictMode>
        <App state={state} />
      </React.StrictMode>

    
  );
}

rerenderTree( )

export default rerenderTree

  
