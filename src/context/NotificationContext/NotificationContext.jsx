import React, { createContext, useState } from 'react'

let alertContext = createContext()
const NotificationContext = ({children}) => {
    const [alert, setAlert]=useState(false)
  return (
    <div>
        <alertContext.Provider value={{alert, setAlert}}>
          {children}
        </alertContext.Provider>
    </div>
  )
}

export { NotificationContext, alertContext };