import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserCard from './props.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div>
      <p>Dealing with Props</p>
      <UserCard name="Bob" age="16" location="New York" />
      <UserCard name="Alice" age="25" location="London" />
    </div>
  </StrictMode>
)
