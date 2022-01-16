import './index.css';
import reportWebVitals from './reportWebVitals';
import renderTree from './render.js';
import store from './state'
store.setRenderTree(renderTree)
renderTree(store.getState())
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
