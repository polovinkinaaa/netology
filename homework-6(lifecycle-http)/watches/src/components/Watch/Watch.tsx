import type { WatchType } from "../../utils/functions.ts";

function Watch({
  watch,
  onDelete,
}: {
  watch: WatchType;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="watch">
      {watch.capital} {watch.timezone}
      <button className="watch-delete" onClick={() => onDelete(watch.id)}>
        x
      </button>
    </div>
  );
}

export default Watch;
