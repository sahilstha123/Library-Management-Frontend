import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import React, {  createContext, ReactNode, useContext, useMemo, useState } from 'react'
import { getTheme } from './theme';


interface ThemeContextType {
    mode: PaletteMode;
    toggleTheme: ()=> void
}
interface ThemeContextProviderType{
  children: ReactNode
}

const ThemeContext = createContext <ThemeContextType |undefined> (undefined)
export const useThemeContext = ()=>{
  const context = useContext(ThemeContext)
  if(!context){
    throw new Error ("useThemeContext must be  within a ThemeContextProvider")
  }
  return context
}
 const ThemeContextProvider = ({children}:ThemeContextProviderType) => {
  const [mode, setMode] = useState<PaletteMode>(()=>{
    const saveMode = localStorage.getItem("themeMode");
    if(saveMode === "light" || saveMode === "dark")
    {
      return saveMode
    }
    return "dark"
  })

  const toggleTheme = () =>{
    setMode((prevMode)=>{
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode
    })
  }

  const theme = useMemo(()=> getTheme(mode), [mode])
  return (
    <ThemeContext.Provider value={{mode,toggleTheme}}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider
