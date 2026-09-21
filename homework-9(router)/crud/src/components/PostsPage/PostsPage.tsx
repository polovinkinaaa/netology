import "./PostsPage.css";
import PostCard from "../PostCard/PostCard.tsx";
import { useEffect, useState } from "react";
import type { PostType } from "../../types.ts";
import { getPosts } from "../../../utils/functions.ts";
import { useNavigate } from "react-router-dom";

function PostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await getPosts();
      setPosts(response);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();
  const addPost = async () => {
    navigate("posts/new");
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchPosts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Не удалось загрузить посты</p>;
  return (
    <div className="post-page">
      <div className="header">
        <button onClick={addPost}> Создать пост </button>
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            content={post.content}
            created={post.created}
          />
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
