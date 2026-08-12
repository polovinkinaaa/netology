import type { ChatType } from "../../utils/types.ts";
import Chat from "../Chat/Chat.tsx";
import "./ChatList.css"
import {useEffect, useRef} from "react";

function ChatList({ list, userId }: { list: ChatType[], userId: string }) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [list]);
  return (
    <div className="chat-list">
      {list.map((chat: ChatType) => (
        <Chat key={chat.id} chat={chat} userId={userId} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatList;
