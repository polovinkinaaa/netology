import "./EditPostCard.css";
function EditPostCard() {
  return (
    <div className="edit-post">
      <div className="edit-post__title">
        <h2>Редактировать публикацию</h2>
        <button type="button" className="edit-post__close" aria-label="Закрыть">
          ×
        </button>
      </div>
      <div className="edit-post__body">
        <img className="edit-post__avatar" src="/cat-avatar.png" alt="" />
        <textarea autoFocus rows={4} className="edit-post__input" />
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
        <button type="button" className="edit-post__save">
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default EditPostCard;
