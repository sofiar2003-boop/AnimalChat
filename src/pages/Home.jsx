import ChatList from "../components/ChatList"

function Home() {
    return (
        <div className="app-container">
        <div className="sidebar">
            <div className="sidebar-header">
            Chats
            </div>
            <ChatList />
        </div>

        <div className="chat-area">
            <div className="chat-header">
            Seleccioná un chat
            </div>
        </div>
        </div>
    )
}

export default Home