import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext.tsx";
import type { NewType } from "../../types.ts";
import New from "../New/New.tsx";
import "./News.css";

function News() {
  const { token, setToken, setProfile } = useContext(AuthContext);
  const [news, setNews] = useState<NewType[]>([]);

  useEffect(() => {
    if (token === null) return;
    const loadNews = async () => {
      const myNews = await fetch("http://localhost:7070/private/news", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (myNews.status === 401) {
        setToken(null);
        setProfile(null);
        localStorage.removeItem("token");
        localStorage.removeItem("profile");
        return;
      }
      if (!myNews.ok) return;
      const data = await myNews.json();
      setNews(data);
    };
    loadNews();
  }, [token]);

  return (
    <div className="news">
      {news.map((item: NewType) => (
        <New key={item.id} {...item} />
      ))}
    </div>
  );
}

export default News;
