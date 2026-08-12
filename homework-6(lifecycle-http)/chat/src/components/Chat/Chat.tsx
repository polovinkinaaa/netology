import type { ChatType } from "../../utils/types.ts";
import "./Chat.css"

function Chat({ chat, userId }: { chat: ChatType, userId: string }) {
    const isMine = chat.userId === userId;
    return (
        <div className={`chat-message ${isMine ? "mine" : "other"}`}> {chat.content} </div>
    );
}

export default Chat;
