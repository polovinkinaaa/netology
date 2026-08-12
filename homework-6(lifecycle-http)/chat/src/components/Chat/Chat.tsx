import type { ChatType } from "../../utils/types.ts";
import "./Chat.css"

function colorFromUserId(userId: string): string {
    const r = parseInt(userId.slice(0, 2), 16);
    const g = parseInt(userId.slice(2, 4), 16);
    const b = parseInt(userId.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

function Chat({ chat, userId }: { chat: ChatType, userId: string }) {
    const isMine = chat.userId === userId;
    return (
        <div className={`chat-message ${isMine ? "mine" : "other"}`} style={{ backgroundColor: colorFromUserId(chat.userId) }}> {chat.content} </div>
    );
}

export default Chat;
