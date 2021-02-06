import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// fetch('http://localhost:3001/notes')
//   .then(response => response.json())
//   .then(data => console.log('Desde el fetch: ',data))

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )