import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

import Login from "./pages/Login"
import Chat from "./pages/Chat"

function Protected({ children }) {
  const { user } = useContext(AuthContext)
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/chat" replace />} />

        <Route
          path="/chat"
          element={
            <Protected>
              <Chat />
            </Protected>
          }
        />

        <Route
          path="/chat/:id"
          element={
            <Protected>
              <Chat />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}