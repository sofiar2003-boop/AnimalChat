import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { useNavigate, useParams } from "react-router-dom";

function ChatList() {
  const { chats } = useContext(ChatContext);
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="chat-list-container">
      <div className="chat-list">
        {chats.map(chat => (
          <div
            key={chat.id}
            className={`chat-item ${Number(id) === chat.id ? "active" : ""}`}
            onClick={() => navigate(`/chat/${chat.id}`)}
          >
            <img src={chat.avatar} alt={chat.name} className="chat-avatar" />

            <div className="contact-info">
              <div className="contact-name">
                {chat.name}
              </div>

              {/* ✅ ahora mostramos teléfono en vez de descripción */}
              <div className="contact-phone">
                {chat.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;