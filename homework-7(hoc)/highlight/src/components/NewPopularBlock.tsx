import type { BlockType } from "../utils/types.ts";
import Popular from "./Popular.tsx";
import New from "./New.tsx";

function NewPopularBlock(Component: React.ComponentType<BlockType>) {
  return function BlockPretty(block: BlockType) {
    const content = <Component {...block} />;
    return block.views >= 1000 ? (
      <Popular> {content} </Popular>
    ) : block.views < 100 ? (
      <New> {content} </New>
    ) : (
      content
    );
  };
}

export default NewPopularBlock;
