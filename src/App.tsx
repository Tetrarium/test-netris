import { EventsContextProvider } from "./components/Events/EventsProvider";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import ViewBoxes from "./components/ViewBoxes/ViewBoxes";
import { STATISTIC_URL, VIDEO_URL } from "./consts";

function App() {
  return (
    <>
      <EventsContextProvider url={STATISTIC_URL}>
        <VideoPlayer src={VIDEO_URL} width={640} height={360}>
          <ViewBoxes />
        </VideoPlayer>
      </EventsContextProvider>
    </>
  );
}

export default App;
