/** Новосная сводка - верхняя треть страницы */
import NewsBlock from "./NewsBlock.tsx";
import PromoBlock from "./PromoBlock.tsx";

function NewsSection() {
  return (
    <>
      <NewsBlock />
      <PromoBlock
        title="Работа над ошибками"
        text="Смотрите на Яндексе и запоминайте"
        icon="..."
      />
    </>
  );
}

export default NewsSection;
