import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import ViewBoxes from "./components/ViewBoxes/ViewBoxes";
import { VIDEO_URL } from "./consts";

function App() {
  return (
    <>
      <VideoPlayer src={VIDEO_URL} width={640} height={360}>
        <ViewBoxes />
      </VideoPlayer>
    </>
  );
}

export default App;
