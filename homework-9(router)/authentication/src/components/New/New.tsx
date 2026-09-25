import type { NewType } from "../../types.ts";
import "./New.css";
function New({ title, image, content }: NewType) {
  return (
    <div className="new">
      <img src={image} alt={title} />
      <div className="new-text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
export default New;
