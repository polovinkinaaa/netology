import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../PostCard/PostCard.tsx";
import { deletePost, getPost } from "../../../utils/functions.ts";
import { useEffect, useState } from "react";
import type { PostType } from "../../types.ts";
import "./PostPage.css";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<PostType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchPost = async (postId: string) => {
    try {
      setLoading(true);
      const response = await getPost(postId);
      if (!response.post) {
        throw new Error("Пост не найден");
      }
      setPost(response.post);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchPost(id);
  }, [id]);
  const navigate = useNavigate();
  const handleDelete = async () => {
    if (!id) return;
    await deletePost(id);
    navigate("/");
  };
  if (!id) return <p>Некорректный адрес поста</p>;
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Не удалось загрузить пост</p>;
  if (!post) return <p>Пост не найден</p>;

  return (
    <div className="post-page">
      <PostCard content={post.content} created={post.created}>
        <div className="post-page__button">
          <button className="post-page__fix"> Изменить </button>
          <button className="post-page__delete" onClick={handleDelete}>
            Удалить
          </button>
        </div>
      </PostCard>
    </div>
  );
}

export default PostPage;
