
import React fomr 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'

// server.js
var express = require('express')
var path = require('path')
var compression = require('compression')
var app = express()

// below must be 1st
app.use(compression())

// serve static assets like css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const appHtml = renderToString(<RouterContext {...props}/>)
  })

  res.send(renderPage(appHtml))
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My Primo React Router App</title>
    <link rel=stylesheet href=/index.css
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script
  `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
