import React, { createContext, useState } from 'react'



    export const Theme =createContext({
      theme:false,
      changeTheme:function changeTheme(){}
    });

    const ThemeContext=({ children }:{ children:React.ReactNode })=>{

      const [theme, setTheme]=useState(false)

      const changeTheme=()=>{
        setTheme((prev)=>!prev)
        return null
      }
      return (
        <div>ThemeContext
          <Theme.Provider value={{ theme,changeTheme }}>
        {children}
          </Theme.Provider>
        </div>
      )
    }
  


export default ThemeContext