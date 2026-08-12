import { useState } from "react";
import * as React from "react";
import "./ChatForm.css";

function ChatForm({ handleSubmit }: { handleSubmit: (text: string) => void }) {
  const [formText, setFormText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormText(e.target.value);
  };
  return (
    <div className="chat-form">
      <form
        className="add-chat"
        onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit(formText);
          setFormText("");
        }}
      >
        <div className="chat-input">
          <input
            name="new-chat"
            id="new-chat"
            type="text"
            value={formText}
            onChange={handleChange}
          />
          <button type="submit">▶</button>
        </div>
      </form>
    </div>
  );
}

export default ChatForm;
