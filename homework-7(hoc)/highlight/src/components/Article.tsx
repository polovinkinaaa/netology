import type { BlockType } from "../utils/types.ts";

function Article(block: BlockType) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{block.title}</a>
      </h3>
      <p className="views">Прочтений: {block.views}</p>
    </div>
  );
}

export default Article;
