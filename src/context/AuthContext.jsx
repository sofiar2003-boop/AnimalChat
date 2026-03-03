import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


  function login({ username, password }) {
    const newUser = {
      name: username,
      password: password,
      description: "¡Hola! Estoy usando AnimalChat 🐾",
      avatar: "/perfiles/usuario.jpg", 
    }
    setUser(newUser)
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
