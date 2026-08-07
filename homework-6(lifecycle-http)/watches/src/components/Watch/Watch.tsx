import type { WatchType } from "../../utils/functions.ts";
import { useEffect, useState } from "react";
import moment from "moment";
import "./Watch.css";

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

  const hours = time.hours();
  const minutes = time.minutes();
  const seconds = time.seconds();
  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div className="watch">
      <div className="title"> {watch.capital} </div>
      <button className="watch-delete" onClick={() => onDelete(watch.id)}>
        x
      </button>
      <div className="clock-face">
        <div
          className="hand hour"
          style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
        />
        <div
          className="hand minute"
          style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
        />
        <div
          className="hand second"
          style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
        />
      </div>
    </div>
  );
}

export default Watch;
