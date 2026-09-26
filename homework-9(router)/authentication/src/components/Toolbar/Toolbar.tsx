import { useContext } from "react";
import AuthContext from "../../context/AuthContext.tsx";
import "./Toolbar.css";
import { useLogout } from "../../utils/hooks.ts";

function Toolbar() {
  const { profile } = useContext(AuthContext);
  const logout = useLogout();
  return (
    <div className="toolbar">
      <div className="website-name">Neto Social</div>
      <div className="user-info">
        <div className="user-name"> Hello, {profile?.name} </div>
        <img className="user-avatar" src={profile?.avatar} alt="avatar" />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
export default Toolbar;
