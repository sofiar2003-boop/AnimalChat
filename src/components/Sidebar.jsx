// ✅ Agregamos 'useState' al import
import { useContext, useState } from "react" 
import { FaWhatsapp, FaPhone, FaCog } from "react-icons/fa"
import { AuthContext } from "../context/AuthContext"

function Sidebar({ setShowSettings, setNotification, setShowContacts, onOpenUserProfile }) {

  const { user, logout } = useContext(AuthContext)
  // Ahora esto ya no dará error
  const [showMyProfile, setShowMyProfile] = useState(false)

  const handlePhoneClick = () => {
    setNotification("La función de llamadas no está disponible")
  }

  const handleWhatsappClick = () => {
    setShowContacts(true)
  }

  return (
    <div className="sidebar-bottom">

      {/* 👤 USUARIO LOGUEADO */}
      {user && (
        <div className="sidebar-user">
          <img
            src={user.avatar}
            className="sidebar-user-avatar"
            onClick={() => setShowMyProfile(true)} 
            style={{ cursor: 'pointer' }}
          />

          <div className="sidebar-user-info">
            <div className="sidebar-user-name">{user.name}</div>
            <button onClick={logout} className="logout-btn">
              Cerrar sesión
            </button>
          </div>

          {/* MODAL MI PERFIL */}
          {showMyProfile && (
            <div className="contacts-modal" onClick={() => setShowMyProfile(false)}>
              <div className="contacts-content" onClick={(e) => e.stopPropagation()}>
                <div style={{ textAlign: 'center' }}>
                  <img 
                    src={user.avatar} 
                    onClick={() => {
                      onOpenUserProfile(); // Esto abre el visor grande
                      setShowMyProfile(false); // Opcional: cierra el modal de texto para ver la foto limpia
                    }}
                    style={{ width: '150px', height: '150px', borderRadius: '50%', cursor: 'pointer', objectFit: 'cover' }} 
                  />
                  <h3 style={{ marginTop: '15px', color: 'white' }}>{user.name}</h3>
                  <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#8696a0' }}>
                    "{user.description}"
                  </p>
                </div>
                <button 
                  className="logout-btn" 
                  style={{ marginTop: '20px', width: '100%', fontSize: '14px' }}
                  onClick={() => setShowMyProfile(false)}
                >
                  Volver
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 🔘 ICONOS */}
      <div className="sidebar-icons">
        <FaWhatsapp onClick={handleWhatsappClick} />
        <FaPhone onClick={handlePhoneClick} />
        <FaCog onClick={() => setShowSettings(true)} />
      </div>

    </div>
  )
}

export default Sidebar