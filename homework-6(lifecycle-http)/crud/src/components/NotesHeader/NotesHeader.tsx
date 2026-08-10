import "./NotesHeader.css";
function NotesHeader({ onRefresh }: { onRefresh: () => void }) {
  return (
    <div className="notes-header">
      Notes
      <button className="note-delete" onClick={onRefresh}>
        ↻
      </button>
    </div>
  );
}

export default NotesHeader;
