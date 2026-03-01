import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import ChatList from "../components/ChatList";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";
import Sidebar from "../components/Sidebar";
import MediaViewer from "../components/MediaViewer";

function Chat() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { chats } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const { background, setBackground } = useContext(ThemeContext);

  const [showSettings, setShowSettings] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showContactProfile, setShowContactProfile] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showMyProfile, setShowMyProfile] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const [viewerConfig, setViewerConfig] = useState({
    show: false,
    media: null,
    currentIndex: 0,
    userAvatar: null
  });

  const messagesRef = useRef(null);

  // ✅ si no hay id, chat es null (NO rompe nada)
  const chat = id ? chats.find(c => c.id === Number(id)) : null;

  // ✅ cuando hay chat seleccionado en mobile => mostramos chat
  const showChatMobile = !!chat;

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // ✅ AUTOSCROLL SEGURO (solo si existe chat)
  useEffect(() => {
    if (!chat || !messagesRef.current) return;
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [chat?.messages?.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showNext = () => {
    if (!viewerConfig.media) return;
    setViewerConfig(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.media.length
    }));
  };

  const showPrev = () => {
    if (!viewerConfig.media) return;
    setViewerConfig(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.media.length) % prev.media.length
    }));
  };

  const closeViewer = () =>
    setViewerConfig({ show: false, media: null, currentIndex: 0, userAvatar: null });

  return (
    <div className={`app-container ${isMobile && showChatMobile ? "mobile-chat" : ""}`}>
      
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sidebar-header header-top">
          <span>🐾 AnimalChat</span>

          {user && (
            <div className="header-user-mini" onClick={() => setShowMyProfile(true)}>
              {user.name}
            </div>
          )}
        </div>

        <ChatList />

        <Sidebar
          setShowSettings={setShowSettings}
          setShowContacts={setShowContacts}
          setNotification={setNotification}
          onOpenUserProfile={() =>
            setViewerConfig({ show: true, media: null, currentIndex: 0, userAvatar: user.avatar })
          }
        />
      </div>

      {/* CHAT AREA: solo renderiza si hay chat */}
      {chat && (
        <div className="chat-area" style={{ backgroundColor: background }}>
          
          <div className="chat-header">
            {/* ✅ BOTON VOLVER SOLO EN MOBILE */}
            {isMobile && (
              <button
                onClick={() => navigate("/")}   // 👈 vuelve al home (lista)
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "20px",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
              >
                ←
              </button>
            )}

            <img
              src={chat.avatar}
              className="chat-avatar"
              alt={chat.name}
              onClick={() => setShowContactProfile(true)}
            />

            <div className="chat-header-info" onClick={() => setShowContactProfile(true)}>
              <div style={{ color: "white", fontWeight: "bold" }}>{chat.name}</div>
              <small style={{ color: "#8696a0" }}>Toca para ver info</small>
            </div>
          </div>

          <div className="messages" ref={messagesRef}>
            {chat.messages.map(msg => (
              <Message key={msg.id} message={msg} />
            ))}
          </div>

          <MessageInput chatId={id} />
        </div>
      )}

      {notification && <div className="notification">{notification}</div>}

      {/* PERFIL CONTACTO */}
      {/* PERFIL CONTACTO */}
{chat && showContactProfile && (
  <div className="contacts-modal" onClick={() => setShowContactProfile(false)}>
    <div
      className="contacts-content"
      style={{ width: "400px" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={chat.avatar}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
          alt="profile"
        />
        <h2 style={{ color: "white", marginTop: "10px" }}>
          {chat.name}
        </h2>
        <p style={{ color: "#25D366" }}>{chat.phone}</p>
        <p style={{ color: "#8696a0", fontSize: "14px" }}>
          {chat.email}
        </p>
      </div>

      {/* DESCRIPCIÓN */}
      <div style={{ marginBottom: "20px" }}>
        <p
          style={{
            color: "#25D366",
            fontSize: "12px",
            fontWeight: "bold"
          }}
        >
          DESCRIPCIÓN
        </p>
        <p style={{ color: "white" }}>
          {chat.description}
        </p>
      </div>

      {/* GALERÍA */}
      {chat.media?.length > 0 && (
        <>
          <p
            style={{
              color: "#25D366",
              fontSize: "12px",
              fontWeight: "bold",
              marginBottom: "10px"
            }}
          >
            GALERÍA
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px"
            }}
          >
            {chat.media.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setViewerConfig({
                    show: true,
                    media: chat.media,
                    currentIndex: index,
                    userAvatar: null
                  })
                }
                style={{
                  cursor: "pointer",
                  height: "80px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: "#000"
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                    alt="media"
                  />
                ) : (
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "10px"
                    }}
                  >
                    VIDEO
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <button
        className="logout-btn"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "10px"
        }}
        onClick={() => setShowContactProfile(false)}
      >
        Cerrar
      </button>
    </div>
  </div>
)}

      {/* CONTACTOS */}
      {showContacts && (
        <div className="contacts-modal" onClick={() => setShowContacts(false)}>
          <div className="contacts-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: "white", marginBottom: "15px" }}>Contactos</h2>
            {chats.map(c => (
              <div
                key={c.id}
                className="chat-item"
                onClick={() => {
                  navigate(`/chat/${c.id}`);
                  setShowContacts(false);
                }}
              >
                <img src={c.avatar} className="chat-avatar" style={{ width: "40px", height: "40px" }} alt={c.name} />
                <div style={{ color: "white", marginLeft: "10px" }}>{c.name}</div>
                <small style={{ color: "#8696a0", fontSize: "12px" }}>
                  No disponible
                </small>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONFIG */}
      {showSettings && (
        <div className="contacts-modal" onClick={() => setShowSettings(false)}>
          <div className="contacts-content" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ color: "white" }}>Configuración</h2>
            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              {["#111b21", "#2c5364", "#0f2027", "#1e2529"].map(color => (
                <div
                  key={color}
                  onClick={() => {
                    setBackground(color);
                    setShowSettings(false);
                    setNotification("¡Cambio de fondo exitoso!");
                  }}
                  style={{
                    backgroundColor: color,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "2px solid white"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VISOR */}
      {viewerConfig.show && (
        <MediaViewer {...viewerConfig} onClose={closeViewer} onNext={showNext} onPrev={showPrev} />
      )}
    </div>
  );
}

export default Chat;