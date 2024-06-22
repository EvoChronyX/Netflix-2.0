
// Summary
// This file sets up the React application and renders the main App component inside an HTML element with the id root.
// It uses BrowserRouter to enable routing in the application.
// React.StrictMode is used to help catch potential issues in development.



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
