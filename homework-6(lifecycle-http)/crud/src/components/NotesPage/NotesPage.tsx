import NotesHeader from "../NotesHeader/NotesHeader.tsx";
import NotesList from "../NotesList/NotesList.tsx";
import NoteForm from "../NoteForm/NoteForm.tsx";
import { useEffect, useState } from "react";
import type { NoteType } from "../../utils/types.ts";
import "./NotesPage.css";

function NotesPage() {
  const [noteData, setNoteData] = useState<NoteType[]>([]);
  const handleSubmit = (text: string) => {
    if (!text) return;
    fetch("http://localhost:7070/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        content: text,
      }),
    }).then(() => loadNotes());
  };
  const handleDelete = (id: number) => {
    fetch(`http://localhost:7070/notes/${id}`, {
      method: "DELETE",
    })
      .then(() => loadNotes())
      .catch((error) => {
        console.error("Не удалось удалить заметку", error);
      });
  };

  const loadNotes = () => {
    fetch("http://localhost:7070/notes")
      .then((response) => response.json())
      .then((notes: NoteType[]) => {
        setNoteData(notes);
      })
      .catch((error) => {
        console.error("Не удалось загрузить заметки", error);
      });
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="notes-page">
      <NotesHeader onRefresh={loadNotes} />
      <NotesList list={noteData} onDelete={handleDelete} />
      <NoteForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default NotesPage;
