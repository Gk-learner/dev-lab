import React from 'react'
import MyContext from './context'

export const MyProvider = ({children}) => {
    const [value, setvalue] = React.useState("Initial Value");
  return (
    <MyContext.Provider value={{value, setvalue}}>
      {children}
    </MyContext.Provider>
  )
}

