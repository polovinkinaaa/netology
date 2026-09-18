import type { PostCardType } from "../../types.ts";
import "./PostCard.css";
import moment from "moment/min/moment-with-locales";
moment.locale("ru");

function PostCard({ content, created, children }: PostCardType) {
  return (
    <div className="post-card">
      <div className="post-card__header">
        <img className="post-card__avatar" src="/cat-avatar.png" alt="Аватар" />
        <div className="post-card__meta">
          <span className="post-card__name">Иван Иванов</span>
          <span className="post-card__date">{moment(created).fromNow()}</span>
        </div>
      </div>
      <p className="post-card__content">{content}</p>
      <div className="post-card__actions">
        <button type="button" className="post-card__action">
          <span className="post-card__icon">👍</span>
          Нравится
        </button>
        <button type="button" className="post-card__action">
          <span className="post-card__icon">💬</span>
          Комментировать
        </button>
      </div>
      {children}
    </div>
  );
}

export default PostCard;
