import { createContext, PropsWithChildren, RefObject, useContext, useRef } from "react";

import style from "./VideoPlayer.module.scss";

type VideoPlayerProps = {
  src: string;
  width?: number;
  height?: number;
} & PropsWithChildren;

const VideoPlayerContext = createContext<RefObject<HTMLVideoElement> | null>(null);

export const useVideoPlayerRef = () => {
  const video = useContext(VideoPlayerContext);

  if (!video) {
    throw new Error('No provide PlayerContext');
  }

  return video;
};

export default function VideoPlayer({
  src,
  children,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={style.container} >
      <video src={src} ref={videoRef} controls />
      <div className={style.overlay}>
        <VideoPlayerContext.Provider value={videoRef}>
          {children}
        </VideoPlayerContext.Provider>
      </div>
    </div>
  );
}