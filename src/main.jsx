import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContext } from './context/UserContext/UserContext.jsx'
import { GroupContext } from './context/GroupContext/GroupContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
    <GroupContext>

    <App />
    </GroupContext>
    </UserContext>
  </StrictMode>,
)
