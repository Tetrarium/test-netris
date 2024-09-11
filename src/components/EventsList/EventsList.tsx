import { useEventContext } from "../Events/EventsProvider";
import { useVideoPlayerRef } from "../VideoPlayer/VideoPlayer";
import style from "./EventsList.module.scss";

export default function EventsList() {
  const events = useEventContext();
  const video = useVideoPlayerRef();
  
  const format = (timestamp: number) => {
    timestamp = Math.round(timestamp * 1000);
    const ms = `${timestamp % 1000}`.padStart(3, '0');
    const s = `${Math.floor(timestamp / 1000) % 60}`.padStart(2, '0');
    const m = `${Math.floor(timestamp / 1000 / 60)}`.padStart(2, '0');
    return `${m}:${s}:${ms}`;
  };

  const handleMoveTo = (timestamp: number) => {
    if (!video.current) return;
    video.current.pause();
    video.current.currentTime = timestamp;
  }

  const listItems = events.map(event => (
    <li key={event.timestamp} className={style.event_item}>
      <button
        className={style.event_btn}
        onClick={() => handleMoveTo(event.timestamp)}
      >{format(event.timestamp)}</button>
    </li>
  ));

  return (
    <div className={style.container}>
      <button className={style.btn_open} onClick={() => { console.log('click!'); }}>☰</button>
      <ul className={style.list}>
        {listItems}
      </ul>
    </div>
  );
}