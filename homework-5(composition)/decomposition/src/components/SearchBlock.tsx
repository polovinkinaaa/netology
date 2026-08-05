/** Поисковый блок - блок с ссылками на другие страницы Яндекса, поисковой строкой и примером, что можно найти */
import YandexPage from "./YandexPage.tsx";
const pages = [
  { text: "Видео", link: "#" },
  { text: "Картинки", link: "#" },
  { text: "Новости", link: "#" },
  { text: "Карты", link: "#" },
  { text: "Маркет", link: "#" },
  { text: "Переводчик", link: "#" },
  { text: "Эфир", link: "#" },
  { text: "ещё", link: "#" },
];

const example = "фаза луны сегодня";

function SearchBlock() {
  return (
    <>
      <nav>
        {pages.map((page) => (
          <YandexPage key={page.text} text={page.text} link={page.link} />
        ))}
      </nav>
      <div>
        <input type="text" placeholder="Поисковая строка" />
        <button type="button">Найти</button>
      </div>
      <div>
        Найдется все. Например, <a href="#">{example}</a>
      </div>
    </>
  );
}

export default SearchBlock;
