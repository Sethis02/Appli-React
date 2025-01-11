import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DarkModeSwitch from "./actions/DarkModeSwitch.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DarkModeSwitch>
          <App />
      </DarkModeSwitch>
  </StrictMode>,
)
