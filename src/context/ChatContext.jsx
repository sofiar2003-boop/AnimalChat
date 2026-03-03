import { createContext, useState } from "react"

export const ChatContext = createContext()

export function ChatProvider({ children }) {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Perro",
      avatar: "/perfiles/perro.jpg",
      description: "Soy Perro. Me encanta correr en la plaza, jugar a la pelota y salir a caminar bajo el sol. Siempre estoy listo para una nueva aventura contigo.",
      phone: "+54 11 1234-5678",
      email: "perro@email.com",
      responses: ["¡Guau! ¿Vamos a la plaza?", "¡Te extrañaba, humano!", "¡Jugamos a la pelota!"],
      media: [
        { type: "image", url: "/media/perro/foto1-perro.jpg" },
        { type: "image", url: "/media/perro/foto2-perro.jpg" },
        { type: "image", url: "/media/perro/foto3-perro.jpg" },
        { type: "video", url: "/media/perro/video1-perro.mp4" },
        { type: "video", url: "/media/perro/video2-perro.mp4" },
      ],
      messages: [
        { id: 101, text: "¡Hola! Soy Perro. ¿Cómo estás hoy?", fromMe: false }
      ]
    },
    {
      id: 2,
      name: "Gato",
      avatar: "/perfiles/gatos.jpg",
      description: "Soy Gato. Amante de las siestas largas, el atún fresco y los lugares tranquilos. No siempre contesto rápido… pero siempre observo todo.",
      phone: "+54 11 2222-3333",
      email: "gato@email.com",
      responses: ["Miau... estoy durmiendo, no molestes ", "¿Trajiste atún?", "Quiero mimos"],
      media: [
        { type: "image", url: "/media/gato/foto1-gato.jpg" },
        { type: "image", url: "/media/gato/foto2-gato.jpg" },
        { type: "image", url: "/media/gato/foto3-gato.jpg" },
        { type: "video", url: "/media/gato/video1-gato.mp4" },
        { type: "video", url: "/media/gato/video2-gato.mp4" },
      ],
      messages: [
        { id: 201, text: "Soy Gato. Estoy tranqui… pero te leo", fromMe: false }
      ]
    },
    {
      id: 3,
      name: "foca",
      avatar: "/perfiles/foca.jpg",
      description: "Soy Foca. Vivo en el mar y adoro nadar entre las olas. Me gusta hablar sobre el océano, el frío del agua y las aventuras marinas.",
      phone: "+54 11 2222-3333",
      email: "foca@email.com",
      responses: ["¡Arf arf! El agua está helada hoy ", "¿Viste qué bien nado? ", "Tenes que venir mas seguido al mar"],
      media: [
        { type: "image", url: "/media/foca/foto1-foca.jpg" },
        { type: "image", url: "/media/foca/foto2-foca.jpg" },
        { type: "image", url: "/media/foca/foto3-foca.jpg" },
        { type: "video", url: "/media/foca/video1-foca.mp4" },
        { type: "video", url: "/media/foca/video2-foca.mp4" },
      ],
      messages: [
        { id: 301, text: "¡Hola! Soy Foca. ¿Hablamos del mar?", fromMe: false }
      ]
    },
    {
      id: 4,
      name: "cerdo",
      avatar: "/perfiles/cerdo.jpg",
      description: "Soy Cerdo. Fan de la comida rica, los baños de lodo y las charlas divertidas. Si hay algo delicioso de por medio, estoy ahí.",
      phone: "+54 11 2222-3333",
      email: "cerdo@email.com",
      responses: ["¡Oink! ¿Alguien dijo comida? ", "No venis hace mucho, i miss you","Me voy a dar un baño de lodo, ¡chau! "],
      media: [
        { type: "image", url: "/media/cerdo/foto1-cerdo.jpg" },
        { type: "image", url: "/media/cerdo/foto2-cerdo.jpg" },
        { type: "image", url: "/media/cerdo/foto3-cerdo.jpg" },
        { type: "video", url: "/media/cerdo/video1-cerdo.mp4" },
        { type: "video", url: "/media/cerdo/video2-cerdo.mp4" },
      ],
      messages: [
        { id: 401, text: "Hola, soy Cerdo . ¿Qué comemos hoy? jaja", fromMe: false }
      ]
    },
    {
      id: 5,
      name: "perezoso",
      avatar: "/perfiles/perezoso.jpg",
      description: "Soy Perezoso. Me tomo la vida con calma. Me gusta conversar despacio, pensar mucho y disfrutar cada momento sin apuro.",
      phone: "+54 11 2222-3333",
      email: "perezoso@email.com",
      responses: ["Ya voy, me estoy apurando ", "WOW, que locoo","Esto esta super cool"],
      media: [
        { type: "image", url: "/media/perezoso/foto1-perezoso.jpg" },
        { type: "image", url: "/media/perezoso/foto2-perezoso.jpg" },
        { type: "image", url: "/media/perezoso/foto3-perezoso.jpg" },
        { type: "video", url: "/media/perezoso/video1-perezoso.mp4" },
        { type: "video", url: "/media/perezoso/video2-perezoso.mp4" },
      ],
      messages: [
        { id: 501, text: "Hey… soy Perezoso. Contestame tranqui", fromMe: false }
      ]
    },
    {
      id: 6,
      name: "pez",
      avatar: "/perfiles/pez.jpg",
      description: "Soy Pez. Vivo bajo el agua y disfruto nadar todo el día. Siempre listo para una charla fresca como el océano.",
      phone: "+54 11 2222-3333",
      email: "pez@email.com",
      responses: ["Vamos a nadar, si?", "Estas para una carrera?","Viva el mar!!"],
      media: [
        { type: "image", url: "/media/pez/foto1-pez.jpg" },
        { type: "image", url: "/media/pez/foto2-pez.jpg" },
        { type: "image", url: "/media/pez/foto3-pez.jpg" },
        { type: "video", url: "/media/pez/video1-pez.mp4" },
        { type: "video", url: "/media/pez/video2-pez.mp4" },
      ],
      messages: [
        { id: 601, text: "Hola!! soy Pez. ¿Listo para charlar?", fromMe: false }
      ]
    }
  ])

  function sendMessage(chatId, text) {
    const numericId = Number(chatId)
    if (Number.isNaN(numericId)) return

    setChats(prev =>
      prev.map(chat =>
        chat.id === numericId
          ? { ...chat, messages: [...chat.messages, { id: Date.now(), text, fromMe: true }] }
          : chat
      )
    )

    setTimeout(() => {
      setChats(prev =>
        prev.map(chat => {
          if (chat.id !== numericId) return chat

          const randomIdx = Math.floor(Math.random() * chat.responses.length)
          const replyText = chat.responses[randomIdx] || "¡Hola!"

          return {
            ...chat,
            messages: [...chat.messages, { id: Date.now() + 1, text: replyText, fromMe: false }]
          }
        })
      )
    }, 1200)
  }

  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  )
}