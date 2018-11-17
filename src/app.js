import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import BigFile from './pages/BigFile'
import NoMatch from './pages/NoMatch'

const Routers = () =>
  <Router>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login"  component={Login} />
      <Route path="/" exact component={Login} />
      <Route path="/bigFile" component={BigFile} />
      <Route component={NoMatch} />
    </Switch>
  </Router>

export default Routers
