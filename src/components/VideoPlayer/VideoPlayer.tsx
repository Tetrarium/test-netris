import { PropsWithChildren, useRef } from "react";

import { useFrames } from "@/hooks/useFrames";

import style from "./VideoPlayer.module.scss";

type VideoPlayerProps = {
  src: string;
  width?: number;
  height?: number;
} & PropsWithChildren;

export default function VideoPlayer({
  src,
  width,
  height,
  children,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useFrames(() => {
    const { current: video } = videoRef;

    if (!video) {
      return;
    }

    const currentTime = video.currentTime ?? 0;

    console.log(currentTime);
  });

  return (
    <div className={style.container} style={{ width, height }}>
      <video src={src} ref={videoRef} controls />
      <div className={style.overlay}>
        {children}
      </div>
    </div>
  );
}