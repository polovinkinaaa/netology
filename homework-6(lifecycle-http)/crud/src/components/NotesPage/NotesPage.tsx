import NotesHeader from "../NotesHeader/NotesHeader.tsx";
import NotesList from "../NotesList/NotesList.tsx";
import NoteForm from "../NoteForm/NoteForm.tsx";
import { useState } from "react";
import type { NoteType } from "../../utils/types.ts";
import "./NotesPage.css"

function NotesPage() {
  const [noteData, setNoteData] = useState<NoteType[]>([]);
  const handleSubmit = (text: string) => {
    if (!text) {
      console.error("The note is empty, add the data");
    } else {
      const newNote: NoteType = {
        id: crypto.randomUUID(),
        text: text,
      };
      setNoteData((prev: NoteType[]) => [...prev, newNote]);
    }
  };
  const handleDelete = (id: string) => {
    setNoteData((prev: NoteType[]) => prev.filter((watch) => watch.id !== id));
  };
  return (
    <div className="notes-page">
      <NotesHeader />
      <NotesList list={noteData} onDelete={handleDelete} />
      <NoteForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default NotesPage;
