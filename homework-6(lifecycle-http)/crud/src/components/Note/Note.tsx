import type { NoteType } from "../../utils/types.ts";

function Note({
  note,
  onDelete,
}: {
  note: NoteType;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="note">
      <button className="note-delete" onClick={() => onDelete(note.id)}>
        x
      </button>
      <div className="note-text">{note.text}</div>
    </div>
  );
}

export default Note;
