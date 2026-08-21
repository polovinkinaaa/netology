import type { VideoType } from "../utils/types.ts";
import Video from "./Video.tsx";

function VideoList({ list }: { list: VideoType[] }) {
  return list.map((item: VideoType) => (
    <Video url={item.url} date={item.date} />
  ));
}

export default VideoList;
