import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {combineReducers, createStore} from "redux";
import renderTree from './render.js';
import {messageReducer, postReducer} from "./data/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
const rootReducer = combineReducers({
    postReducer,
    messageReducer
})
const store = createStore(rootReducer)
ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
reportWebVitals();
// import store from './data/state'
// store.setRenderTree(renderTree)
// renderTree(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
