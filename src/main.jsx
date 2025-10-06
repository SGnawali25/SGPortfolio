import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'
import App from './App.jsx'
import './index.css'

ReactGA.initialize('G-0N9DGW93YN') 
ReactGA.send('pageview')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
