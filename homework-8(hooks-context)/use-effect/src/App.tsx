import "./App.css";
import List from "./components/List/List.tsx";
import Details from "./components/Details.tsx";
import { useEffect, useState } from "react";
import type { UserType } from "./utils/types.ts";

const url = import.meta.env.VITE_USERS_URL;

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  function onSelect(id: number) {
    setSelectedId(id);
  }
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <List users={users} selectedId={selectedId} onSelect={onSelect} />
      <Details selectedId={selectedId} />
    </div>
  );
}

export default App;
