import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"

function MessageInput({ chatId }) {
  const { sendMessage } = useContext(ChatContext)
  const [text, setText] = useState("")

  const handleSend = () => {
    if (!text.trim()) return
    sendMessage(chatId, text.trim())
    setText("")
  }

  return (
    <div className="message-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí un mensaje..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend()
        }}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  )
}

export default MessageInput