import { useState } from "react";
import * as React from "react";
import "./NoteForm.css";

function NoteForm({ handleSubmit }: { handleSubmit: (text: string) => void }) {
  const [formText, setFormText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormText(e.target.value);
  };
  return (
    <div className="note-form">
      <form
        className="add-note"
        onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit(formText);
          setFormText("");
        }}
      >
        <label htmlFor="new-note">New Note</label>
        <div className="note-input">
          <textarea
            name="new-note"
            id="new-note"
            value={formText}
            onChange={handleChange}
          />
          <button type="submit">▶</button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
