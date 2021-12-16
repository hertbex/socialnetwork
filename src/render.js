import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './App';
function renderTree(){
    ReactDOM.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById("root")
  )
  }
export default renderTree