import type { WatchType } from "../../utils/functions.ts";

function Watch({ watch }: { watch: WatchType }) {
  return (
    <div className="watch">
      {watch.capital} {watch.timezone}
    </div>
  );
}

export default Watch;
