function Message({ message }) {
    return (
        <div className={`message ${message.fromMe ? "me" : "other"}`}>
        {message.text}
        </div>
    )
}

export default Message