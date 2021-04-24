import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Box';
import {BoxPanel} from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas, useFrame } from 'react-three-fiber'


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const startLeft = -window.innerWidth/42;

ReactDOM.render(
  <div>
    <BoxPanel/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
