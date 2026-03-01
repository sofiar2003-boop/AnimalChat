import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("user")
    if (saved) setUser(JSON.parse(saved))
  }, [])

  function login({ username, password }) {
    const newUser = {
      name: username,
      password: password,
      description: "¡Hola! Estoy usando AnimalChat 🐾",
      avatar: "/perfiles/usuario.jpg", // ✅ Tu foto por defecto
    }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  function updateProfile({ avatar, description }) {
    setUser(prev => {
      const updated = { ...prev, avatar, description }
      localStorage.setItem("user", JSON.stringify(updated))
      return updated
    })
  }

  function logout() {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}