import "./Photo.css";
function Photo({ url }: { url: string }) {
  return (
    <div className="photo">
      <button>x</button>
      <img src={url} />
    </div>
  );
}

export default Photo;
