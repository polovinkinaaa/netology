import type { WatchType } from "../../utils/functions.ts";
import { useEffect, useState } from "react";
import moment from "moment";

function Watch({
  watch,
  onDelete,
}: {
  watch: WatchType;
  onDelete: (id: string) => void;
}) {
  const [time, setTime] = useState(() => moment().utcOffset(watch.timezone));
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setTime(moment().utcOffset(watch.timezone));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [time, watch.timezone]);

  return (
    <div className="watch">
      {watch.capital} {watch.timezone} {time.format("HH:mm:ss")}
      <button className="watch-delete" onClick={() => onDelete(watch.id)}>
        x
      </button>
    </div>
  );
}

export default Watch;
