import "./Photo.css";
function Photo({ url, onDelete }: { url: string; onDelete: () => void }) {
  return (
    <div className="photo">
      <button onClick={onDelete}>x</button>
      <img src={url} />
    </div>
  );
}

export default Photo;
