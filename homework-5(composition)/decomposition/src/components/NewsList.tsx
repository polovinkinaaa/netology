/** Список новостей для выбранной вкладки. */
import News from "./News.tsx";
type Header = "Сейчас в СМИ" | "в Германии" | "Рекомендуем";

type NewsProps = {
  icon: string;
  text: string;
  link: string;
};

const newsByHeader: Record<Header, NewsProps[]> = {
  "Сейчас в СМИ": [
    { icon: "/news1.png", text: "Путин упростил...", link: "#" },
    { icon: "/news2.png", text: "В команде Зеленского...", link: "#" },
  ],
  "в Германии": [
    { icon: "/news3.png", text: "Новость из Германии", link: "#" },
  ],
  Рекомендуем: [
    { icon: "/news4.png", text: "Рекомендованная новость", link: "#" },
  ],
};

function NewsList({ header }: { header: Header }) {
  const items: NewsProps[] = newsByHeader[header];
  const today = new Date().toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
  return (
    <>
      <nav>
        <a href="#">Сейчас в СМИ</a>
        <a href="#">в Германии</a>
        <a href="#">Рекомендуем</a>
        <span>{today}</span>
      </nav>
      <ul>
        {items.map((item) => (
          <News key={item.text} {...item} />
        ))}
      </ul>
    </>
  );
}

export default NewsList;
