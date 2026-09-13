import "./App.css";
import { useState } from "react";
import AuthContext from "./context/AuthContext";
import Login from "./components/Login/Login.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import News from "./components/News/News.tsx";
import type { Profile } from "./types.ts";
import Banner from "./components/Banner/Banner.tsx";

function App() {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token"),
  );
  const [profile, setProfile] = useState<Profile | null>(() => {
    const raw = localStorage.getItem("profile");
    return raw ? JSON.parse(raw) : null;
  });

  return (
    <AuthContext.Provider value={{ token, setToken, profile, setProfile }}>
      {!token ? (
        <>
          <Login />
          <Banner />
        </>
      ) : (
        <>
          <Toolbar />
          <News />
        </>
      )}
    </AuthContext.Provider>
  );
}

export default App;
