/** Одна ссылка на другую поисковую страницу */
type PageType = {
  text: string;
  link: string;
};
function YandexPage({ text, link }: PageType) {
  return (
    <>
      <a href={link}>{text}</a>
    </>
  );
}

export default YandexPage;
