import React    from 'react'
import ReactDOM from 'react-dom'
import App      from './App/App'

// Global stylesheets.
require('bulma/css/bulma.css')
require('./application.css')

// Bootstrap the app.
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
