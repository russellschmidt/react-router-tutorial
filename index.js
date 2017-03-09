// index.js
import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import Repos from './modules/Repos'
import About from './modules/About'
import Repo from './modules/Repo'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Home from './modules/Home'

render((
  <Router history={hashHistory}>
  { /* add the routes here */ }
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>

      <Route path="/about" component={About} />
    </Route>

  </Router>
), document.getElementById('app'))
