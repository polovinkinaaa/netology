import type { ChatType } from "../../utils/types.ts";
import Chat from "../Chat/Chat.tsx";
import "./ChatList.css"

function ChatList({ list, userId }: { list: ChatType[], userId: string }) {
  return (
    <div className="chat-list">
      {list.map((chat: ChatType) => (
        <Chat key={chat.id} chat={chat} userId={userId} />
      ))}
    </div>
  );
}

export default ChatList;
