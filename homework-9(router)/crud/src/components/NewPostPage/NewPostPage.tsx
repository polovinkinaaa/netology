import "./NewPostPage.css";
import { createPost } from "../../../utils/functions.ts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NewPostPage() {
  const [context, setContext] = useState("");
  const handleSubmit = async () => {
    const text = context.trim();
    if (!text) return;
    await createPost(text);
    setContext("");
    navigate("/");
  };

  const handleDelete = () => {
    navigate("/");
    setContext("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContext(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="new-post">
      <div className="new-post__header">
        <button className="new-post__action">
          <span className="new-post__icon">📝</span>
          Публикация
        </button>
        <button className="new-post__action">
          <span className="new-post__icon">🖼️</span>
          Фото/Видео
        </button>
        <button className="new-post__action">
          <span className="new-post__icon">🔴</span>
          Прямой эфир
        </button>
        <button className="new-post__action">
          <span className="new-post__icon">⋯</span>
          Еще
        </button>
        <button className="new-post__close" onClick={handleDelete}>
          ×
        </button>
      </div>
      <div className="new-post__text">
        <div className="new-post__avatar" />
        <textarea
          autoFocus
          className="new-post__input"
          placeholder="Что у вас нового?"
          rows={4}
          value={context}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="new-post__button">
        <button className="new-post__add" onClick={handleSubmit}>
          Опубликовать
        </button>
      </div>
    </div>
  );
}

export default NewPostPage;
