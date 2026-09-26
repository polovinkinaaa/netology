import type { NewType } from "../../types.ts";
import "./New.css";
import { useNavigate } from "react-router-dom";
function New({ id, title, image, content }: NewType) {
  const navigate = useNavigate();
  const openPost = async (id: string) => {
    navigate(`/news/${id}`);
  };
  return (
    <div
      className="new"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("button")) return;
        openPost(id);
      }}
    >
      <img src={image} alt={title} />
      <div className="new-text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
export default New;
