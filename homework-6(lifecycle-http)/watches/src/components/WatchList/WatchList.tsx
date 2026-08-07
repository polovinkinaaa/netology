import Watch from "../Watch/Watch.tsx";
import type { WatchType } from "../../utils/functions.ts";

function WatchList({ list }: { list: WatchType[] }) {
  return (
    <div className="watch-list">
      {list.map((watch: WatchType) => (
        <Watch key={watch.id} watch={watch} />
      ))}
    </div>
  );
}

export default WatchList;
