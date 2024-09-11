import { useState } from "react";
import { useEventContext } from "../Events/EventsProvider";
import { useVideoPlayerRef } from "../VideoPlayer/VideoPlayer";
import style from "./EventsList.module.scss";
import classNames from "classnames";

export default function EventsList() {
  const events = useEventContext();
  const video = useVideoPlayerRef();
  const [isOpened, setIsOpened] = useState(false);
  
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
    setIsOpened(false);
  }

  const listStyle = classNames(style.list, {
    [style.list_opened]: isOpened,
  });

  const containerStyle = classNames(style.container, {
    [style.container_blur]: isOpened,
  });

  const btnStyle = classNames(style.btn_open, {
    [style.btn_hidden]: isOpened,
  })

  const listItems = events.map(event => (
    <li key={event.timestamp} className={style.event_item}>
      <button
        className={style.event_btn}
        onClick={() => handleMoveTo(event.timestamp)}
      >{format(event.timestamp)}</button>
    </li>
  ));

  const handleOpenList = ( e: { stopPropagation: () => void; } ) => {
    e.stopPropagation()
    setIsOpened(true);
  }

  return (
    <div className={containerStyle} onClick={() => setIsOpened(false)}>
      <button className={btnStyle} onClick={handleOpenList}>☰</button>
      <ul className={listStyle}>
        {listItems}
      </ul>
    </div>
  );
}