import { useRef } from "react";

import { useFrames } from "@/hooks/useFrames";

import { useEventContext } from "../Events/EventsProvider";
import { useVideoPlayerRef } from "../VideoPlayer/VideoPlayer";
import style from "./ViewBoxes.module.scss";

export default function ViewBoxes() {
  const videoRef = useVideoPlayerRef();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const events = useEventContext();

  useFrames(() => {
    const { current: video } = videoRef;
    const { current: canvas } = canvasRef;
    const ctx = canvas?.getContext('2d');

    if (!video || !canvas || !ctx || !events) {
      return;
    }

    if (
      canvas.width !== video.videoWidth
      ||
      canvas.height !== video.videoHeight
    ) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';

    const currentTime = video.currentTime ?? 0;

    for (let i = 0; i < events.length; i++) {
      const { timestamp, duration, zone } = events[i];
      const startTime = Math.floor(timestamp * 1000) / 1000;
      if (currentTime >= startTime && currentTime <= (startTime + duration)) {
        ctx.fillRect(zone.left, zone.top, zone.width, zone.height);
      }
    }
  });


  return (
    <canvas ref={canvasRef} className={style.canvas} />
  );
}