import "./NewPostPage.css";
function NewPostPage() {
  return (
    <div className="new-post">
      <div className="new-post__header">
        <button type="button" className="new-post__action">
          <span className="new-post__icon">📝</span>
          Публикация
        </button>
        <button type="button" className="new-post__action">
          <span className="new-post__icon">🖼️</span>
          Фото/Видео
        </button>
        <button type="button" className="new-post__action">
          <span className="new-post__icon">🔴</span>
          Прямой эфир
        </button>
        <button type="button" className="new-post__action">
          <span className="new-post__icon">⋯</span>
          Еще
        </button>
        <button type="button" className="new-post__close">
          ×
        </button>
      </div>
      <div className="new-post__text">
        <div className="new-post__avatar" />
        <textarea
          className="new-post__input"
          placeholder="Что у вас нового?"
          rows={4}
        />
      </div>
      <div className="new-post__button">
        <button type="button" className="new-post__add">
          Опубликовать
        </button>
      </div>
    </div>
  );
}

export default NewPostPage;
