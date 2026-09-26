import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext.tsx";

export function useLogout() {
  const { setToken, setProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  return () => {
    setToken(null);
    setProfile(null);
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    navigate("/");
  };
}
