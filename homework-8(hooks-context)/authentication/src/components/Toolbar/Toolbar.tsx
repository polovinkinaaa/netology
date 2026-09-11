import { useContext } from "react";
import AuthContext from "../../context/AuthContext.tsx";

function Toolbar() {
  const { profile, setToken, setProfile } = useContext(AuthContext);
  const handleDelete = () => {
    setToken(null);
    setProfile(null);
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
  };
  return (
    <div className="toolbar">
      <div className="website-name">Neto Social</div>
      <div className="user-name"> Hello, {profile?.name} </div>
      <img className="user-avatar" src={profile?.avatar} alt="avatar" />
      <button onClick={handleDelete}>Logout</button>
    </div>
  );
}
export default Toolbar;
