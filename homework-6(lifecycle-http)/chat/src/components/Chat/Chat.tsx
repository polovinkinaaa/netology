import type { ChatType } from "../../utils/types.ts";

function Note({ note }: { note: ChatType }) {
  return (
    <div className="note">
      <div className="note-text">{note.content} {note.userId}</div>
    </div>
  );
}

export default Note;
