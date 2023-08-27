import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import '../style/style.css'

ReactDOM.createRoot(document.getElementById('particles-js') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
