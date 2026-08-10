import type { NoteType } from "../../utils/types.ts";
import "./Note.css";

function Note({
  note,
  onDelete,
}: {
  note: NoteType;
  onDelete: (id: number) => void;
}) {
  return (
    <div className="note">
      <button className="note-delete" onClick={() => onDelete(note.id)}>
        ×
      </button>
      <div className="note-text">{note.content}</div>
    </div>
  );
}

export default Note;
