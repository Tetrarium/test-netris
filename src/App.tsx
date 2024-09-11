import { EventsContextProvider } from "./components/Events/EventsProvider";
import EventsList from "./components/EventsList/EventsList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import ViewBoxes from "./components/ViewBoxes/ViewBoxes";
import { STATISTIC_URL, VIDEO_URL } from "./consts";

function App() {
  return (
    <div className="page-container">
      <EventsContextProvider url={STATISTIC_URL}>
        <VideoPlayer src={VIDEO_URL}>
          <ViewBoxes />
          <EventsList />
        </VideoPlayer>
      </EventsContextProvider>
    </div>
  );
}

export default App;
