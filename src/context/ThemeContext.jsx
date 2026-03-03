import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [background, setBackground] = useState(
    localStorage.getItem("bg") || "#111b21"
  )

  useEffect(() => {
    localStorage.setItem("bg", background)
    document.body.style.backgroundColor = background
  }, [background])

  return (
    <ThemeContext.Provider value={{ background, setBackground }}>
      {children}
    </ThemeContext.Provider>
  )
}