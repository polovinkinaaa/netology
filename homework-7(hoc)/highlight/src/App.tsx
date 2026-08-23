import { blocks } from "./utils/blocks.ts";
import type { BlockType } from "./utils/types.ts";
import NewPopularBlock from "./components/NewPopularBlock.tsx";
import Video from "./components/Video.tsx";
import Article from "./components/Article.tsx";

const PrettyVideo = NewPopularBlock(Video);
const PrettyArticle = NewPopularBlock(Article);

function List({ blocks }: { blocks: BlockType[] }) {
  return blocks.map((block) => {
    switch (block.type) {
      case "video":
        return <PrettyVideo key={block.url} {...block} />;

      case "article":
        return <PrettyArticle key={block.title} {...block} />;
    }
  });
}

export default function App() {
  return <List blocks={blocks} />;
}
