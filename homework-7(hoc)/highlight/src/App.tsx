import { blocks } from "./utils/blocks.ts";
import type { BlockType } from "./utils/types.ts";

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  );
}

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  );
}

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

function Video(block: BlockType) {
  return (
    <div className="item item-video">
      <iframe
        src={block.url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="views">Просмотров: {block.views}</p>
    </div>
  );
}

function List({ blocks }: { blocks: BlockType[] }) {
  return blocks.map((block) => {
    switch (block.type) {
      case "video":
        return <Video {...block} />;

      case "article":
        return <Article {...block} />;
    }
  });
}

export default function App() {
  return <List blocks={blocks} />;
}
