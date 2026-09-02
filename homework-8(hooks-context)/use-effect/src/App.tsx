import "./App.css";
import List from "./components/List/List.tsx";
import Details from "./components/Details/Details.tsx";
import { useEffect, useState } from "react";
import type { UserType } from "./utils/types.ts";

const url = import.meta.env.VITE_USERS_URL;

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [info, setInfo] = useState<UserType | null>(null);
  function onSelect(user: UserType) {
    setInfo(user);
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
      <List users={users} selectedId={info?.id ?? null} onSelect={onSelect} />
      <Details info={info} />
    </div>
  );
}

export default App;
