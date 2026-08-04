/** Блок с новостями на сегодня */
import SharesList from "./SharesList.tsx";
import NewsList from "./NewsList.tsx";

function NewsBlock() {
  return (
    <>
      <NewsList header="Сейчас в СМИ" />
      <SharesList />
    </>
  );
}

export default NewsBlock;
