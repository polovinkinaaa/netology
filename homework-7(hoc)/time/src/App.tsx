import { videos } from "./utils/videos.ts";
import VideoList from "./components/VideoList.tsx";

export default function App() {
  return <VideoList list={videos} />;
}
