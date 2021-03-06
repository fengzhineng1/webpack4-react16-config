// import React from 'react'
import * as React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Loadable from 'react-loadable'
import { hot } from 'react-hot-loader'
// import Loading from 'components/Loading'
// import Input from 'pages/Input'

// const loadableFunc = (loader) => Loadable({
//   loader,
//   loading: Loading
// })

// const Home = loadableFunc(() => import('./pages/Home'))
// const BigFile = loadableFunc(() => import('./pages/BigFile'))
// const Login = loadableFunc(() => import('./pages/Login'))
// const NoMatch = loadableFunc(() => import('./pages/NoMatch'))
// const Inputs = Loadable({
//   loader: () => import('./pages/Input'),
//   loading: Loading
// })
// const Hello = loadableFunc(() => import('./pages/Hello'))


// const Login = Loadable({
//   loader: () => import('./pages/Login'),
//   loading: Loading
// })
// function Loading({ error }) {
//   console.log('error', error)
//   if (error) {
//     return 'Oh nooess!';
//   } else {
//     return <h3>Loading...</h3>;
//   }
// }
import { Hello } from "./pages/Hello";
import { Errors } from "./pages/Error"

const Routers = () =>
  <Router>
    <Switch>
      <Route path="/" exact component={Hello} />
      <Route component={Errors} a={10000000} />
      {/* <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/bigFile" component={BigFile} />
      <Route path="/numberInput" component={Inputs} />
      <Route component={NoMatch} /> */}
    </Switch>
  </Router>

export default hot(module)(Routers)
