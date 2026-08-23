import type { BlockType } from "../utils/types.ts";

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

export default Video;
