import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from "./App";

function renderTree(state){
    ReactDOM.render(
    <React.StrictMode>
      <App state={state}/>
    </React.StrictMode>,
    document.getElementById("root")
  )
  }
export default renderTree