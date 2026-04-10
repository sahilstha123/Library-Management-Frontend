import React from 'react'


interface ThemeContextType {
    mode: PaletteMode;
    toggleTheme: ()=> void
}

const ThemeContext = createContext <ThemeContextType |undefined> (undefined)
const ThemeContextProvider = () => {
  return (
    <div>ThemeContextProvider</div>
  )
}

export default ThemeContextProvider