import AuthContext from "../../context/AuthContext.tsx";
import { useContext, useState } from "react";
import * as React from "react";

function Login() {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const { setToken, setProfile } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:7070/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.message ?? "Не удалось войти");
        return;
      }
      const { token } = await res.json();
      const meRes = await fetch("http://localhost:7070/private/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!meRes.ok) {
        setError("Не удалось загрузить профиль");
        return;
      }

      const profile = await meRes.json();
      setToken(token);
      setProfile(profile);
      localStorage.setItem("token", token);
      localStorage.setItem("profile", JSON.stringify(profile));
    } catch {
      console.log("Ошибка соединения с сервером");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="add-user" onSubmit={handleSubmit}>
      <label htmlFor="login">Username</label>
      <input
        name="login"
        id="login"
        type="text"
        value={formData.login}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Login;
