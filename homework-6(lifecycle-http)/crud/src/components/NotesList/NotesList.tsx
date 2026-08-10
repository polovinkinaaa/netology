import Note from "../Note/Note.tsx";
import type { NoteType } from "../../utils/types.ts";
import "./NotesList.css"

function NotesList({
  list,
  onDelete,
}: {
  list: NoteType[];
  onDelete: (id: string) => void;
}) {
  return (
    <div className="notes-list">
      {list.map((note: NoteType) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NotesList;
