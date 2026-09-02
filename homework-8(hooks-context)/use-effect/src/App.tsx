import "./App.css";
import List from "./components/List.tsx";
import Details from "./components/Details.tsx";
import { useEffect, useState } from "react";

const url = import.meta.env.VITE_USERS_URL;

function App() {
  const [users, setUsers] = useState([]);
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
      <List users={users} />
      <Details />
    </div>
  );
}

export default App;
