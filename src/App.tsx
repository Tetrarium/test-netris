import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { VIDEO_URL } from "./consts";

function App() {
  return (
    <>
      <VideoPlayer src={VIDEO_URL} width={640} height={360}>
        Overlay
      </VideoPlayer>
    </>
  );
}

export default App;
