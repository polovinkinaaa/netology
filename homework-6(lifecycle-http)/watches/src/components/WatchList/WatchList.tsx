import Watch from "../Watch/Watch.tsx";
import type { WatchType } from "../../utils/functions.ts";
import "./WatchList.css";

function WatchList({
  list,
  onDelete,
}: {
  list: WatchType[];
  onDelete: (id: string) => void;
}) {
  return (
    <div className="watch-list">
      {list.map((watch: WatchType) => (
        <Watch key={watch.id} watch={watch} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default WatchList;
