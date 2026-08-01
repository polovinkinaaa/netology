import "./Photo.css";
function Photo({
  url,
  onDelete,
}: {
  url: string;
  onDelete: (url: string) => void;
}) {
  return (
    <div className="photo">
      <button onClick={() => onDelete(url)}>x</button>
      <img src={url} />
    </div>
  );
}

export default Photo;
