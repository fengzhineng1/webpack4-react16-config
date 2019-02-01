// import React, { Component } from 'react';
// import { Provider } from 'react-redux'
// import Store from '../stores'

// import ReactDOM from 'react-dom';
// import './style/common.css'
// import App from './app.js'

// ReactDOM.render(
//     <Provider store={Store}>
//         <App />
//     </Provider>,
//     document.getElementById('app')
// )

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./pages/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);
