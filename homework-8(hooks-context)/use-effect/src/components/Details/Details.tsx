import { useEffect, useState } from "react";
import type { DetailType, UserType } from "../../utils/types.ts";
import "./Details.css";

const url = import.meta.env.VITE_USER_URL;

function Details({ info }: { info: UserType | null }) {
  const currentId = info?.id ?? null;
  const [detail, setDetail] = useState<DetailType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prevId, setPrevId] = useState(currentId);

  if (currentId !== prevId) {
    if (currentId !== null) {
      setIsLoading(true);
    }
    setPrevId(currentId);
    setError(null);
    setDetail(null);
  }
  useEffect(() => {
    if (currentId === null) return;
    let processIsFinish = false;
    fetch(url.replace("{id}", String(currentId)))
      .then((response) => {
        if (!response.ok) throw new Error("Ошибка сети");
        return response.json();
      })
      .then((data: DetailType) => {
        if (!processIsFinish) {
          setDetail(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!processIsFinish) {
          console.error(err);
          setError("Не удалось загрузить");
          setIsLoading(false);
        }
      });
    return () => {
      processIsFinish = true;
    };
  }, [currentId]);
  if (currentId === null) return null;
  if (isLoading) return <div className="details">Загрузка...</div>;
  if (error) return <div className="details">{error}</div>;
  if (!detail) return <div className="details">Нет данных</div>;

  return (
    <div className="details">
      <img src={`${detail.avatar}?img=${detail.id}`} alt={detail.name} />
      <div className="text">
        <h2>{detail.name}</h2>
        <p>City: {detail.details.city}</p>
        <p>Company: {detail.details.company}</p>
        <p>Position: {detail.details.position}</p>
      </div>
    </div>
  );
}

export default Details;
