/** Основная страница сайта */
import NewsSection from "./NewsSection.tsx";
import SearchSection from "./SearchSection.tsx";
import WidgetsSection from "./WidgetsSection.tsx";

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
