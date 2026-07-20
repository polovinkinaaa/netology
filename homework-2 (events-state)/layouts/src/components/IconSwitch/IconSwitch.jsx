import "./IconSwitch.css";
function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon-switch">
      <button className="material-icons" onClick={onSwitch}>
        <span>{icon}</span>
      </button>
    </div>
  );
}

export default IconSwitch;
