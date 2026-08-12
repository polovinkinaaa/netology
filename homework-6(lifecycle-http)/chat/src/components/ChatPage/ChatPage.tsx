import { useEffect, useState } from "react";
import type { ChatType } from "../../utils/types.ts";
import ChatHeader from "../ChatHeader/ChatHeader.tsx";
import ChatList from "../ChatList/ChatList.tsx";
import ChatForm from "../ChatForm/ChatForm.tsx";

function ChatPage() {
  const [chatData, setChatData] = useState<ChatType[]>([]);
  const handleSubmit = (text: string) => {
    if (!text) return;
    console.log("handleSubmit", text);
    fetch("http://localhost:7070/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        userId: "5f2d9da0-f624-4309-a598-8ba35d6c4bb6",
        content: text,
      }),
    }).then(() => loadChats());
  };

  const loadChats = () => {
    fetch("http://localhost:7070/messages")
      .then((response) => response.json())
      .then((notes: ChatType[]) => {
        setChatData(notes);
      })
      .catch((error) => {
        console.error("Не удалось загрузить предыдущие сообщения", error);
      });
  };

  useEffect(() => {
    loadChats();
  }, []);

  return (
    <div className="chat-page">
      <ChatHeader />
      <ChatList list={chatData} />
      <ChatForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default ChatPage;
