import type { VideoType } from "../utils/types.ts";
import DateTimePretty from "./DateTimePretty.tsx";

function Video({ url, date }: VideoType) {
  return (
    <div className="video">
      <iframe
        src={url}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}

export default Video;
