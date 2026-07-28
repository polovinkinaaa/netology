import { useState } from "react";
import "./Color.css";

function Color() {
  const [color, setColor] = useState("rgb(255,255,255)");
  const [input, setInput] = useState("");

  function isAllInput(color: string) {
    setInput(color);
    if (color.length == 7) {
      setColor(color);
    }
  }

  return (
    <div className="color" style={{ backgroundColor: color }}>
      <input
        type="text"
        value={input}
        onChange={(e) => isAllInput(e.target.value)}
      />
      <div className="color-result">{color}</div>
    </div>
  );
}

export default Color;
