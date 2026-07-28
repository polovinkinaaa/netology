import { useState } from "react";
import "./Color.css";
import { colord } from "colord";

function getBackgroundColor(color: string): string {
  if (color === "") {
    return "rgb(255, 255, 255)";
  }
  if (color === "Ошибка") {
    return "rgb(255, 0, 0)";
  }
  return color;
}

function Color() {
  const [colorRGB, setColorRGB] = useState("");
  const [input, setInput] = useState("");

  function isAllInput(inputValue: string) {
    setInput(inputValue);
    if (inputValue.length === 7) {
      if (colord(inputValue).isValid()) {
        setColorRGB(colord(inputValue).toRgbString());
      } else {
        setColorRGB("Ошибка");
      }
    } else {
      setColorRGB("");
    }
  }

  return (
    <div
      className="color"
      style={{ backgroundColor: getBackgroundColor(colorRGB) }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => isAllInput(e.target.value)}
      />
      <div className="color-result">{colorRGB}</div>
    </div>
  );
}

export default Color;
