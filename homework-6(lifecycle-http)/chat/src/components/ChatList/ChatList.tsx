import type { ChatType } from "../../utils/types.ts";
import Chat from "../Chat/Chat.tsx";

function ChatList({ list }: { list: ChatType[] }) {
  return (
    <div className="chat-list">
      {list.map((note: ChatType) => (
        <Chat key={note.id} note={note} />
      ))}
    </div>
  );
}

export default ChatList;
