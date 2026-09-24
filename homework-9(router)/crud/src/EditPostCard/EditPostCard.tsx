import "./EditPostCard.css";
import { useState } from "react";
import { editPost } from "../../utils/functions.ts";
function EditPostCard({
  id,
  content,
  onClose,
}: {
  id: string;
  content: string;
  onClose: () => void;
}) {
  const [text, setText] = useState(content);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = async () => {
    const newText = text.trim();
    if (!newText) return;
    await editPost(newText, id);
    onClose();
  };
  return (
    <div className="edit-post">
      <div className="edit-post__title">
        <h2>Редактировать публикацию</h2>
        <button
          onClick={onClose}
          className="edit-post__close"
          aria-label="Закрыть"
        >
          ×
        </button>
      </div>
      <div className="edit-post__body">
        <img className="edit-post__avatar" src="/cat-avatar.png" alt="" />
        <textarea
          autoFocus
          rows={4}
          className="edit-post__input"
          onFocus={(event) => {
            const field = event.currentTarget;
            const end = field.value.length;
            requestAnimationFrame(() => {
              field.setSelectionRange(end, end);
            });
          }}
          value={text}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="edit-post__actions">
        <button className="edit-post__action">
          <span>🖼️</span>
          Фото/видео
        </button>
        <button className="edit-post__action">
          <span>👤</span>
          Отметить друзей
        </button>
        <button className="edit-post__action">
          <span>😊</span>
          Чувства/действия
        </button>
        <button className="edit-post__action">
          <span>📍</span>
          Отметить посещение
        </button>
        <button className="edit-post__action">
          <span className="edit-post__gif">GIF</span>
          GIF
        </button>
      </div>
      <div className="edit-post__footer">
        <button className="edit-post__save" onClick={handleSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default EditPostCard;
