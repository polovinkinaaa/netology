import { useState } from "react";
import * as React from "react";

function NoteForm({ handleSubmit }: { handleSubmit: (text: string) => void }) {
  const [formText, setFormText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormText(e.target.value);
  };
  return (
    <div className="note-form">
      <form
        className="add-node"
        onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSubmit(formText);
          setFormText("");
        }}
      >
        <label htmlFor="new-note">New Note</label>
        <input
          name="new-note"
          id="new-note"
          type="text"
          value={formText}
          onChange={handleChange}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default NoteForm;
