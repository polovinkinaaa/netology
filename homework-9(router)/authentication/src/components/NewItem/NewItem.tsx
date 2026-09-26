import type { NewType } from "../../types.ts";
import "./NewItem.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext.tsx";
import { getNewItem } from "../../utils/functions.ts";
import { useLogout } from "../../utils/hooks.ts";
function NewItem() {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [newItem, setNewItem] = useState<NewType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const logout = useLogout();
  const fetchNew = async (NewId: string) => {
    if (!token) return;
    try {
      setLoading(true);
      const response = await getNewItem(NewId, token);
      if (!response) {
        throw new Error("Новость не найдена");
      }
      setNewItem(response);
      setError(false);
    } catch (err) {
      if (err instanceof Error && err.message === "401") {
        logout();
        return;
      }
      if (err instanceof Error && err.message === "404") {
        setNotFound(true);
        return;
      }
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!id || !token) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchNew(id);
  }, [id, token]);
  if (notFound) return <h1 className="not-found">Not Found</h1>;
  if (!id) return <p>Некорректный адрес новости</p>;
  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Не удалось загрузить новость</p>;
  if (!newItem) return <p>Новость не найдена</p>;
  return (
    <div className="new-item">
      <img src={newItem.image} alt={newItem.title} />
      <div className="new-text">
        <h3>{newItem.title}</h3>
        <p>{newItem.content}</p>
      </div>
    </div>
  );
}
export default NewItem;
