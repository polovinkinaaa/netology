import { useEffect, useState } from "react";
import type { ChatType } from "../../utils/types.ts";
import ChatHeader from "../ChatHeader/ChatHeader.tsx";
import ChatList from "../ChatList/ChatList.tsx";
import ChatForm from "../ChatForm/ChatForm.tsx";
import "./ChatPage.css"

function ChatPage() {
  const [chatData, setChatData] = useState<ChatType[]>([]);
  const [lastId, setLastId] = useState(0);
  const [updated, setUpdated] = useState(0);

  function getUserId() {
    let id = localStorage.getItem("userId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("userId", id);
    }
    return id;
  }
  const [userId] = useState(() => getUserId());

  const handleSubmit = (text: string) => {
    if (!text) return;
    console.log("handleSubmit", text, "userId", userId);
    fetch("http://localhost:7070/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        userId: userId,
        content: text,
      }),
    })
  };

  const loadChats = () => {
    fetch(`http://localhost:7070/messages?from=${lastId}`)
      .then((response) => response.json())
      .then((messages: ChatType[]) => {
        if (messages.length > 0) {
          setChatData((prev) => {const have = new Set(prev.map((m) => m.id));
            const fresh = messages.filter((m) => !have.has(m.id));
            return fresh.length ? [...prev, ...fresh] : prev;});
          setLastId(messages[messages.length - 1].id)
        }
        setUpdated(Date.now());
      })
      .catch((error) => {
        console.error("Не удалось загрузить новые сообщения", error);
        setUpdated(Date.now());
      });
  };

  useEffect(() => {
    loadChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (updated === 0) return;
    const timeout = window.setTimeout(loadChats, 2000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updated]);

  return (
    <div className="chat-page">
      <ChatHeader />
      <ChatList list={chatData} userId={userId} />
      <ChatForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default ChatPage;
