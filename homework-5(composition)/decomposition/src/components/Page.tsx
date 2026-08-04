/** Основная страница сайта */
import NewsSection from "./NewsSection.tsx";

function Page() {
  return (
    <>
      <NewsSection />
      <SearchSection />
      <WidgetsSection />
    </>
  );
}

export default Page;
