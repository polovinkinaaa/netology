import "./PostsPage.css";
import PostCard from "../PostCard/PostCard.tsx";

const mockCreated = Date.now() - 5 * 60 * 1000;

function PostsPage() {
  return (
    <div className="post-page">
      <div className="header">
        <button> Создать пост </button>
      </div>
      <div className="post-list">
        <PostCard content="привет, всем" created={mockCreated} />
      </div>
    </div>
  );
}

export default PostsPage;
